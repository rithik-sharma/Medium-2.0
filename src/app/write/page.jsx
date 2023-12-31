"use client";
import React, { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style" className={styles.option}>
          style
        </option>
        <option value="fashion" className={styles.option}>
          fashion
        </option>
        <option value="food" className={styles.option}>
          food
        </option>
        <option value="culture" className={styles.option}>
          culture
        </option>
        <option value="travel" className={styles.option}>
          travel
        </option>
        <option value="coding" className={styles.option}>
          coding
        </option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            width={28}
            height={28}
            className={styles.image}
          />
        </button>

        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={27} height={27} />
              </label>
            </button>

            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt=""
                width={28}
                height={28}
                className={styles.image}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt=""
                width={30}
                height={30}
                className={styles.image}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story.."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        {" "}
        Publish
      </button>
    </div>
  );
};

export default WritePage;
