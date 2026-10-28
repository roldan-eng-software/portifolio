"use client";
import { MotionConfig } from "framer-motion";

// Passes the user's prefers-reduced-motion preference down to every
// framer-motion animation on the page, while keeping final states visible.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
