import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from "emailjs-com";
import { ContextAPI } from "../GlobalProvider/ContextAPI";

const CommissionForm = () => {
    const {isFormOpen , setIsFormOpen} = useContext(ContextAPI)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactMethod: "",
    handle: "",
    commissionType: "",
    budget: "",
    rigging: false,
    commercialRights: false,
    idea: "",
    lore: "",
    files: [],
  });

  if (!isFormOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.contactMethod ||
      !formData.handle ||
      !formData.commissionType ||
      !formData.budget ||
      !formData.idea
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("form", formData)

    // EmailJS send
    emailjs
      .send(
        "service_ahydoxf",
        // "template_p97et6g",
        "template_p97es3q",

        {
          name: formData.name,
          email: formData.email,
          contactMethod: formData.contactMethod,
          handle: formData.handle,
          commissionType: formData.commissionType,
          budget: formData.budget,
          rigging: formData.rigging ? "Yes" : "No",
          commercialRights: formData.commercialRights ? "Yes" : "No",
          idea: formData.idea,
          lore: formData.lore,
        },
        "UsYzOaerYQuNo-a92"
      )
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contactMethod: "",
          handle: "",
          commissionType: "",
          budget: "",
          rigging: false,
          commercialRights: false,
          idea: "",
          lore: "",
          files: [],
        });
        setIsFormOpen(false)
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send. Form is not working properly");
      });
  };

  return (
    <div className="w-full sm:py-10 min-h-screen fixed bg-primaryDark bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-secondaryDark text-headingDark p-6 rounded-lg w-[90%] max-w-3xl relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl hover:text-red-500"
          onClick={() => setIsFormOpen(false)}
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          COMMISSION REQUEST FORM
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="contactMethod"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.contactMethod}
            onChange={handleChange}
            required
          >
            <option className="text-black" value="">Preferred contact method</option>
            <option className="text-black" value="email">Email</option>
            <option className="text-black" value="twitter">Twitter</option>
            <option className="text-black" value="discord">Discord</option>
          </select>

          <input
            type="text"
            name="handle"
            placeholder="Handle (link)"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.handle}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="commissionType"
            placeholder="Commission type (e.g., vtuber, art...)"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.commissionType}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="p-2 rounded bg-transparent border border-gray-500"
            value={formData.budget}
            onChange={handleChange}
            required
          />

          {/* Checkboxes */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="rigging"
              checked={formData.rigging}
              onChange={handleChange}
              className="accent-purple-500"
            />
            Include rigging (if model)
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="commercialRights"
              checked={formData.commercialRights}
              onChange={handleChange}
              className="accent-purple-500"
            />
            Commercial rights
          </label>

          {/* Full width fields */}
          <textarea
            name="idea"
            placeholder="Describe your idea"
            className=" md:col-span-2 p-2 rounded bg-transparent border border-gray-500 min-h-[100px]"
            value={formData.idea}
            onChange={handleChange}
            required
          ></textarea>


          <textarea
            name="lore"
            placeholder="Lore / Story (optional)"
            className="md:col-span-2 p-2 rounded bg-transparent border border-gray-500 min-h-[80px]"
            value={formData.lore}
            onChange={handleChange}
          ></textarea>

          <p className="md:col-span-2 text-lg text-gray-300">
            50% upfront payment is required. We’ll respond within 24-49 hours.
          </p>

          <button
            type="submit"
            className="md:col-span-2 bg-buttonPrimary hover:bg-slate-700  text-white font-semibold py-2 px-4 rounded"
          >
            REQUEST MY CUSTOM PROJECT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommissionForm;
