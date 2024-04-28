"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TagInput } from "./components/TagInput"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
    contactName: z.string().min(2).max(50),
    contactEmail: z.string().min(2).max(50).email(),
    bands: z.array(z.string().min(2).max(50)).min(1),
    eventTitle: z.string().min(2).max(50),
    stage: z.string().min(2).max(50),
    showDetailsUrl: z.string().min(2).max(50).url(),
    venue: z.string().min(2).max(50),
});

export function NewShowForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contactName: "",
            contactEmail: "",
            bands: [],
            eventTitle: "",
            stage: "",
            showDetailsUrl: "",
            venue: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="eventTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Title</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Name of the event.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="showDetailsUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Show Details Link</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="venue"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Venue</FormLabel>
                            <FormControl>
                                <Select onValueChange={(value: string) => field.onChange(value)} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bands"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bands</FormLabel>
                            <TagInput onEnter={(value: string[]) => field.onChange(value)}/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className='w-full lg:w-[150px]' disabled={!form.formState.isValid}>Submit</Button>
            </form>
        </Form>
    )
}