"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useArtistContext } from "@/context/ArtistContext";

// (your schema and categories code...)
const schema = yup.object().shape({ /* ... */ });

export default function OnboardForm() {
  const { addArtist } = useArtistContext();

  const {
    register,
    handleSubmit,
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
    const submitted = { ...data, id: Date.now() };
    addArtist(submitted);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
     
    </form>
  );
}
