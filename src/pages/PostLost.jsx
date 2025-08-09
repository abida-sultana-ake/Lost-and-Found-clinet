import React, { useState } from "react";

const PostLost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateLost: "",
    location: "",
    contactInfo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.dateLost) newErrors.dateLost = "Date lost is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.contactInfo.trim())
      newErrors.contactInfo = "Contact info is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data to API or handle logic here
      alert("Lost item posted successfully!");
      setFormData({
        title: "",
        description: "",
        dateLost: "",
        location: "",
        contactInfo: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Post a Lost Item
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.title
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-ulab-blue`}
            placeholder="E.g. Lost Black Wallet"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border resize-none ${
              errors.description
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-ulab-blue`}
            placeholder="Provide details about the lost item"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Date Lost */}
        <div className="mb-4">
          <label
            htmlFor="dateLost"
            className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
          >
            Date Lost
          </label>
          <input
            type="date"
            name="dateLost"
            id="dateLost"
            value={formData.dateLost}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.dateLost
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-ulab-blue`}
          />
          {errors.dateLost && (
            <p className="text-red-500 text-sm mt-1">{errors.dateLost}</p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.location
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-ulab-blue`}
            placeholder="Where did you lose it?"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <label
            htmlFor="contactInfo"
            className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
          >
            Contact Info
          </label>
          <input
            type="text"
            name="contactInfo"
            id="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${
              errors.contactInfo
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-ulab-blue`}
            placeholder="Phone number or email"
          />
          {errors.contactInfo && (
            <p className="text-red-500 text-sm mt-1">{errors.contactInfo}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-ulab-blue text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit Lost Item
        </button>
      </form>
    </div>
  );
};

export default PostLost;
