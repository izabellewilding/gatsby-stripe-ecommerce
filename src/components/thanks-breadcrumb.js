import React from "react"

const ThanksBreadcrumb = () => {
  return (
    <div className="w-full flex justify-center items-center p-4  chivo-reg border-b border-gray-200 text-sm text-gray-600 bg-gray-100">
      <p>
        Photos by{" "}
        <a
          href="https://unsplash.com/@tomcrewceramics"
          target="_blank"
          className=" text-indigo-500"
        >
          Tom Crew
        </a>{" "}
        on <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </div>
  )
}

export default ThanksBreadcrumb
