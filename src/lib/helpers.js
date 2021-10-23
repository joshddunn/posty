import { useEffect, useRef } from 'react';

export const sendResponse = (type, url, headers, body) => {
  const mappedHeaders = {
    "Cache-Control": "no-cache",
  }

  headers.forEach(header => {
    if (header[0]) {
      mappedHeaders[header[0]] = header[1]
    }
  });

  const mappedBody = {}

  body.forEach(b => {
    if (b[0]) {
      mappedBody[b[0]] = b[1]
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
