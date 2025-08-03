import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SportsPage() {
    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-4xl">Apostas Esportivas</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Esta página está em construção. Volte em breve para apostar nos seus esportes favoritos!</p>
                </CardContent>
            </Card>
        </div>
    )
}
