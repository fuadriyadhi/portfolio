import React from "react";

export default function NotFound() {
  document.title = "PageNot Found";
  return (
    <div
      class="w-screen min-h-screen max-w-[1440px] mx-auto flex flex-col
    justify-center items-center"
    >
      <h1 class="text-orange-500 text-4xl">404 Page Not Found❌</h1>
    </div>
  );
}
