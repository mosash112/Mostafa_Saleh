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
import { Textarea } from "@/components/ui/textarea"
import sendEmail from "@/app/api/mail"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRef } from "react"


export type FormDataType = {
    name: string;
    email: string;
    subject: string;
    content: string;
}

const formSchema = z.object({
    name: z.string()
        .min(2, {
            message: "name must not be shorter than 2 characters.",
        }).max(50, {
            message: "name must not be longer than 50 characters.",
        }),
    email: z.string().email(),
    subject: z.string()
        .min(2, {
            message: "subject must not be shorter than 2 characters.",
        }).max(50, {
            message: "subject must not be longer than 50 characters.",
        }),
    content: z.string()
        .max(200, {
            message: "Content must not be longer than 200 characters.",
        }),
})


function SendEmailForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            content: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        sendEmail(data.name, data.email, data.subject, data.content);
    }


    return (
        <div className="px-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the name that show in the email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>email</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@example.com" type="email" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>subject</FormLabel>
                                <FormControl>
                                    <Input placeholder="subject" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the email subject.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>content</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is the email content.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Dialog >
                        <DialogTrigger asChild>
                            <Button type="submit">Submit</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-foreground">
                            <DialogHeader>
                                <DialogTitle className="text-primary">Thank you for sending an email</DialogTitle>
                                <DialogDescription className="text-secondary">
                                    Now the email that youjust sent will find me shortly and you will hear from me soon.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                    <Button type="button" variant="destructive">
                                        Close
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </form>
            </Form>
        </div>
    )
}

export default SendEmailForm