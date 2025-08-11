import React, { useState } from "react";

const PostFound = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateFound: "",
    location: "",
    contactInfo: "",
    link: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.dateFound) newErrors.dateFound = "Date found is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.contactInfo.trim())
      newErrors.contactInfo = "Contact info is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Found item posted successfully!");
      setFormData({
        title: "",
        description: "",
        dateFound: "",
        location: "",
        contactInfo: "",
        link: "",
        image: null,
      });
      setImagePreview(null);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Post a Found Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Item Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.title
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="E.g. Found Gold Ring"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border resize-none ${
              errors.description
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Provide details about the found item"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Date Found */}
        <div>
          <label
            htmlFor="dateFound"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Date Found <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateFound"
            id="dateFound"
            value={formData.dateFound}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.dateFound
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.dateFound && (
            <p className="text-red-500 text-sm mt-1">{errors.dateFound}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Location Found <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.location
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Where did you find it?"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <label
            htmlFor="contactInfo"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Contact Info <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contactInfo"
            id="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.contactInfo
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Phone number or email"
          />
          {errors.contactInfo && (
            <p className="text-red-500 text-sm mt-1">{errors.contactInfo}</p>
          )}
        </div>

        {/* Link Option */}
        <div>
          <label
            htmlFor="link"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            External Link (optional)
          </label>
          <input
            type="url"
            name="link"
            id="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="E.g. Google Drive image link"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Upload Image (optional)
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-gray-700 dark:text-gray-300"
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 rounded-lg border border-gray-300 dark:border-gray-600"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
        >
          📤 Submit Found Item
        </button>
      </form>
    </div>
  );
};

export default PostFound;
