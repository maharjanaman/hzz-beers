/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import HouzzBeer from "../assets/houzzBeer.png";
import { useMyBeersFacade } from "../facades";

Modal.setAppElement("#root");

const useAddBeerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addBeer } = useMyBeersFacade();

  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    reset();
    setIsOpen(false);
  };

  const handleAddABeer = (values: any) => {
    const newBeer = {
      id: uuidv4(),
      name: values.name,
      tagline: values.tagline,
      description: values.description,
    };
    addBeer(newBeer);
    reset();
    closeModal();
  };

  const CModal = () => {
    if (!isOpen) return null;

    return (
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            width: "500px",
            height: "600px",
          },
        }}
      >
        <h1 className="text-xl">Add a New Beer</h1>

        <div className="flex justify-items-start grow my-4">
          <div className="border-2 p-2 rounded-md border-slate-300">
            <img className="object-contain h-32 w-32" src={HouzzBeer} />
          </div>
        </div>

        <form onSubmit={handleSubmit(handleAddABeer)}>
          <input
            placeholder="Beer name*"
            className={`${errors.name ? "border-red-600" : ""}`}
            {...register("name", { required: "Required" })}
          />

          <input
            placeholder="Tagline*"
            className={`${errors.tagline ? "border-red-600" : ""}`}
            {...register("tagline", { required: "Required" })}
          />

          <textarea
            rows={6}
            placeholder="Description*"
            className={`${errors.description ? "border-red-600" : ""}`}
            {...register("description", { required: "Required" })}
          />

          <div className="flex justify-end items-center mt-3">
            <button className="mr-8 text-slate-400" onClick={closeModal}>
              Cancel
            </button>

            <button className="bg-blue-600 text-white transition rounded-md px-4 py-2">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  return { openModal, closeModal, CModal };
};

export default useAddBeerModal;
