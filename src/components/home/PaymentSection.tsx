import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PixIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" className="text-primary">
        <path fill="currentColor" d="M152.22,46.1,128,21.88,103.78,46.1l-24.2,24.2,24.2,24.2,24.22-24.22,16.29,16.3-16.3,16.3L103.78,131,79.57,155.2l24.2,24.2L128,203.62l24.22-24.22,24.2-24.2-24.2-24.2,24.2-24.2ZM128,110.32l-16.29-16.3L128,77.72l16.29,16.3Z"/>
        <path fill="currentColor" d="M224,128a96,96,0,1,1-96-96,96,96,0,0,1,96,96m-16,0a80,80,0,1,0-80,80,80,80,0,0,0,80-80"/>
    </svg>
);


export function PaymentSection() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-headline">Métodos de Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
                        <div className="flex flex-col items-center text-center">
                            <PixIcon />
                            <h3 className="mt-4 text-xl font-semibold">Depósito Rápido com PIX</h3>
                            <p className="mt-1 text-muted-foreground">Comece a jogar em segundos.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-lg">Faça seu primeiro depósito e aproveite <br /> nosso bônus de boas-vindas!</p>
                             <Button size="lg" className="mt-4">
                                Depositar Agora
                             </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
