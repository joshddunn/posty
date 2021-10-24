import { useEffect, useRef } from 'react';
import pretty from 'pretty';

export const prettifyResponse = (response) => {
  try {
    const json = JSON.parse(response)
    return JSON.stringify(json, null, '  ')
  } catch {
    return pretty(response)
  }
}

export const sendResponse = (type, url, headers, body, cleanup) => {
  const mappedHeaders = {
    "Cache-Control": "no-cache",
  }

  headers.forEach(h => {
    if (h.header) {
      mappedHeaders[h.field] = h.value
    }
  });

  const mappedBody = {}

  body.forEach(b => {
    if (b.field) {
      mappedBody[b.field] = b.file || b.value
    }
  });

  const params = {
    type: type,
    headers: mappedHeaders,
  }

  if (type !== "GET") {
    params["body"] = JSON.stringify(mappedBody)
  }

  return fetch(url, params)
    .then(response => {
      const resp = {
        status: response.status,
        type: null,
        dataPromise: null,
        data: ""
      }

      const contentDisposition = response.headers.get('content-disposition')
      if (contentDisposition && contentDisposition.includes("attachment;")) {
        resp.type = "Blob"
        resp.dataPromise = response.blob()

        const match = contentDisposition.match(/filename=(.+)$/)
        resp.filename = match[match.length - 1]
      } else {
        resp.type = "Text"
        resp.dataPromise = response.text()
      }

      if (resp.dataPromise) {
        resp.dataPromise.then(data => {
          resp.data = resp.type === "Blob" ? data : prettifyResponse(data)
          cleanup(resp)
        })
      } else {
        cleanup(resp)
      }
    })
}

export const scrollBottom = id => {
  let e = document.getElementById(id);
  e.scrollTop = e.scrollHeight - e.clientHeight;
}

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
