import React, { useState, useEffect } from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems([
      {
        id: 1,
        type: "Lost",
        title: "Black Backpack",
        description: "Contains a laptop and books.",
        date: "2025-08-05",
        location: "ULAB Campus A",
        contact: "student@example.com",
        image:
          "https://i.pinimg.com/1200x/48/b4/01/48b40112ba6ba201b08b3483f726c337.jpg",
        link: "https://example.com/item/1",
      },
      {
        id: 2,
        type: "Found",
        title: "Gold Ring",
        description: "Found in the cafeteria.",
        date: "2025-08-07",
        location: "ULAB Cafeteria",
        contact: "finder@example.com",
        image:
          "https://i.pinimg.com/1200x/c3/90/a3/c390a362bb20fd4008ce9792546e1e0b.jpg",
        link: "https://example.com/item/2",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        📋 All Lost & Found Items
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No items posted yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.type === "Lost"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium">{item.title}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3 text-blue-600">
                    <a
                      href={`mailto:${item.contact}`}
                      className="hover:underline"
                    >
                      {item.contact}
                    </a>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <FiEye size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full shadow-lg relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            {selectedItem.image && (
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="mb-2">
              <strong>Type:</strong>{" "}
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  selectedItem.type === "Lost"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {selectedItem.type}
              </span>
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {selectedItem.description}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {selectedItem.date}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {selectedItem.location}
            </p>
            <p className="mb-2">
              <strong>Contact Email:</strong>{" "}
              <a
                href={`mailto:${selectedItem.contact}`}
                className="text-blue-600 hover:underline"
              >
                {selectedItem.contact}
              </a>
            </p>
            <p>
              <strong>More Info:</strong>{" "}
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllItems;
