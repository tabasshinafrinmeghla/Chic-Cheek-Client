import React, { useState } from "react";
import Swal from "sweetalert2";

const BlogsCard = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Handle video file upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

  // Handle form submission
  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const video = form.video.value;
    const description = form.description.value;
    const comment = form.comment.value;
    const date = form.date.value; // Get the selected date
    const uploadProduct = {
      name,
      description,
      video,
      comment,
      date, // Include the date in the payload
    };
    console.log(uploadProduct);

    // Send data to the server
    // fetch(`http://localhost:5000/product/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateProduct),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       Swal.fire({
    //         title: "Success",
    //         text: "Product Updated Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });

    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Uploded blog",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-slate-500 flex flex-col justify-center items-center py-8">
      {/* Form Section */}
      <form
        className="bg-stone-400 size-8/12 rounded-xl m-2"
        onSubmit={handleUpdateProduct}>
        {/* Row 1 */}
        {/* Video Upload Section */}
        <div className="mb-1">
          <label
            htmlFor="videoUpload"
            className="block text-sm font-medium text-slate-950 mb-2 text-center">
            <h1 className="mt-4">Uploaded Your Video </h1>
          </label>
        </div>

        {/* Video Display Section */}
        <div className="w-full  shadow-lg rounded-lg overflow-hidden ">
          <div className="video-container m-4 center">
            {videoSrc ? (
              <video controls className="w-full">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex justify-center items-center h-56 bg-gray-200">
                <p className="text-gray-500 text-sm">No video uploaded yet</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-slate-300 m-2 border-r-2 ">
          <input
            id="videoUpload"
            type="file"
            accept="video/*"
            name="video"
            onChange={handleVideoUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
          />
        </div>

        <div className=" px-4 py-4">
          {" "}
          {/* Wrap the content to ensure full width on large screens */}
          <div className="mb-4">
            {/* Row 1 */}

            <div className="grid md:flex ">
              <div className="w-full md:w-1/2 ms-2">
                <h1 className="text-black text-5xl ms-2 pt-2 pb-2">
                  Blog Title
                </h1>
                <label className="input input-bordered flex items-center gap-2 w-full ">
                  <input
                    type="text"
                    name="name"
                    className="w-full text-slate-400"
                    placeholder="Blog Title"
                    onFocus={(e) => (e.target.value = "")}
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 ms-2">
                <h1 className="text-black text-5xl ms-2 pt-2 pb-2">
                  Description
                </h1>
                <label className="input input-bordered flex items-center gap-2 w-full ms-2">
                  <input
                    type="text"
                    name="description"
                    className="w-full text-slate-400 "
                    placeholder="description"
                    onFocus={(e) => (e.target.value = "")}
                  />
                </label>
              </div>
            </div>
            <div className="grid md:flex ">
              <div className="w-full md:w-1/2 ms-2">
                <h1 className="text-black text-xl ms-2 pt-2">Comment</h1>
                <label className="input input-bordered flex items-center gap-2 w-full ">
                  <input
                    type="text"
                    name="comment"
                    className="w-full text-slate-400"
                    placeholder="comment"
                    onFocus={(e) => (e.target.value = "")}
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 ms-6">
                <h1 className="text-black text-xl ms-2 pt-2">Date</h1>
                <div className="w-full md:w-1/2 ">
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <input
                      type="date"
                      name="date"
                      className="w-full text-slate-400"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Row 2 */}

            {/* Submit Button */}
            <div className="m-4">
              <input
                type="submit"
                value="Post"
                className="btn btn-block bg-orange-400"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogsCard;
