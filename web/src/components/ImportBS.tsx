"use client"

import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function ImportBS() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
  return (
    <></>
  );
}