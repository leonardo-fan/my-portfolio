"use client"

import SkeletonButton from "./SkeletonButton"

export default function LinkButton({ text, className, link } : { text : string, className : string, link : string }) {
  return (
    <SkeletonButton text={text} className={className} onClick={() => {location.href = link}} />
  )
}