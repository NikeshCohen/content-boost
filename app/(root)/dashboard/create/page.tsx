"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useCreateQuiz } from "./_hooks/useCreateQuiz";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const youtubeUrlSchema = z
  .string()
  .min(1, { message: "URL is required." })
  .url({ message: "Invalid URL." })
  .refine(
    (url) => {
      try {
        const urlObj = new URL(url);
        return (
          urlObj.hostname === "www.youtube.com" && urlObj.searchParams.has("v")
        );
      } catch {
        return false;
      }
    },
    {
      message: "URL must be a valid YouTube link with a 'v' parameter.",
    },
  );

const FormSchema = z.object({
  videoUrl: youtubeUrlSchema,
  quizName: z.string().optional(),
  quizSize: z
    .number()
    .min(1, { message: "Quiz size must be at least 1." })
    .int({ message: "Quiz size must be an integer." }),
  difficulty: z.enum(["Easy", "Medium", "Hard"], {
    errorMap: () => ({ message: "Select a difficulty level." }),
  }),
});

function Page() {
  const router = useRouter();
  const { generating, error, handleCreateQuiz } = useCreateQuiz();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      videoUrl: "",
      quizName: "",
      quizSize: 5,
      difficulty: "Easy",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const quizId = await handleCreateQuiz(data);

    if (error) {
      console.error(error);
      toast.error(error);
      return;
    }

    router.push(`/dashboard/edit/${quizId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-8 text-3xl">Create New Quiz</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>YouTube URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quizName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quiz Name (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter quiz name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quizSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of questions</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="5"
                    placeholder="Number of questions"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>
                <FormControl className="w-full">
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={generating}>
            {generating ? "Generating..." : "Create Quiz"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Page;
