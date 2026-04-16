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
import { useRef, useState } from "react"
import { Loader2 } from "lucide-react"


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
    const [isSending, setIsSending] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [result, setResult] = useState({ success: false, message: "" });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSending(true);
        const res = await sendEmail(data.name, data.email, data.subject, data.content);
        setResult(res || { success: false, message: "Something went wrong. Please try again." });
        setIsSending(false);
        setDialogOpen(true);
        if (res?.success) {
            form.reset();
        }
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
                    <Button type="submit" disabled={isSending}>
                        {isSending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSending ? "Sending..." : "Submit"}
                    </Button>

                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogContent className="glass-card border-2 border-border/50 shadow-2xl overflow-hidden p-0">
                            <div className={`h-2 w-full ${result.success ? 'bg-primary' : 'bg-destructive'}`} />
                            <div className="p-8">
                                <DialogHeader>
                                    <DialogTitle className={`text-2xl font-outfit font-bold ${result.success ? 'text-primary' : 'text-destructive'}`}>
                                        {result.success ? "Message Sent!" : "Oops! Something went wrong"}
                                    </DialogTitle>
                                    <DialogDescription className="text-foreground/80 text-lg mt-4 !leading-relaxed">
                                        {result.message}
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="mt-8">
                                    <DialogClose asChild>
                                        <Button 
                                            type="button" 
                                            variant={result.success ? "default" : "destructive"}
                                            className="px-8"
                                        >
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </div>
                        </DialogContent>
                    </Dialog>
                </form>
            </Form>
        </div>
    )
}

export default SendEmailForm