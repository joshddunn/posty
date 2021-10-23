import { useEffect, useRef } from 'react';

export const sendResponse = (type, url, headers, body) => {
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

  return fetch(url, params).then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error("Something Broke");
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
