#!/usr/bin/env node

import { fileURLToPath } from "url";
import {
  readdirSync,
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { dirname, join } from "path";

const rootdir = dirname(dirname(fileURLToPath(import.meta.url)));
const postsdir = join(rootdir, "posts");
const contentdir = join(rootdir, "app", "content");

const getPosts = () => {
  return readdirSync(postsdir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
    .map((dirent) => dirent.name);
};

const publishPost = (name) => {
  mkdirSync(join(contentdir, name), { recursive: true });
  readdirSync(join(postsdir, name)).forEach((src) => {
    if (src.startsWith(".")) {
      return;
    } else if (src.endsWith(".md")) {
      writeFileSync(
        join(contentdir, name, src + "x"),
        readFileSync(join(postsdir, name, src), "utf-8")
          .replace("<!--mdx", "")
          .replace("mdx-->", ""),
      );
    } else {
      copyFileSync(join(postsdir, name, src), join(contentdir, name, src));
    }
  });
};

const publish = async () => {
  getPosts().forEach((post) => {
    console.log("Publishing: " + post);
    publishPost(post);
  });
};

publish();
