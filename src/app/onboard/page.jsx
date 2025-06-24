"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Input,
  Textarea,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Button,
  Label,
} from "@/components/ui"; // Adjust this if you’re importing individually

const categories = ["Singers", "Dancers", "Speakers", "DJs"];
const languages = ["Hindi", "English", "Tamil", "Marathi"];
const feeRanges = [
  "₹10,000 - ₹20,000",
  "₹15,000 - ₹30,000",
  "₹25,000 - ₹50,000",
  "₹30,000 - ₹60,000",
];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  location: yup.string().required("Location is required"),
  category: yup
    .array()
    .min(1, "Select at least one category")
    .required(),
  languages: yup
    .array()
    .min(1, "Select at least one language")
    .required(),
  fee: yup.string().required("Fee range is required"),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data) => {
    const submitted = {
      ...data,
      id: Date.now(),
    };

    console.log("Submitted Artist:", submitted);

    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Artist Onboarding</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" {...register("bio")} />
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        </div>

        <div>
          <Label>Category</Label>
          {categories.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                value={cat}
                {...register("category")}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>

        <div>
          <Label>Languages Spoken</Label>
          {languages.map((lang) => (
            <label key={lang} className="block">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
          <p className="text-red-500 text-sm">{errors.languages?.message}</p>
        </div>

        <div>
          <Label>Fee Range</Label>
          <select {...register("fee")} className="border rounded w-full px-3 py-2">
            <option value="">Select</option>
            {feeRanges.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm">{errors.fee?.message}</p>
        </div>

        <div>
          <Label>Upload Image (optional)</Label>
          <input type="file" className="border rounded w-full px-3 py-2" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
