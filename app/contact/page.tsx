import SendEmailForm from "@/components/forms/sendEmailForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function contact() {
    return (
        <div className="flex m-4 lg:m-12 w-10/12 items-center justify-evenly gap-10">
            <div className="flex-1">
                <Card className="border-none rounded-2xl ">
                    <CardHeader>
                        <CardTitle>Contact by email</CardTitle>
                        <CardDescription className="text-secondary">send me an email</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SendEmailForm />
                    </CardContent>
                </Card>
            </div>
            <div className="flex-1 border-2 border-foreground rounded-xl p-3">
                <h1 className="font-semibold text-xl mb-3">Contact directly</h1>
                <div className="grid grid-cols-[0.2fr_1fr] gap-3 ">
                    <h2>Phone: </h2>
                    <h2>+201000518165</h2>
                    <h2>Email: </h2>
                    <h2>mashalex2000@gmail.com <br /> mostafasaleh11200@gmail.com</h2>
                </div>
            </div>
        </div>
    );
}