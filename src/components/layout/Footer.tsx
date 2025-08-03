import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card text-muted-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">Blaze Reborn</h3>
            <p className="mt-2 text-sm">
              Sua plataforma de jogos online. Jogue com responsabilidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-foreground">Navegação</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/casino" className="hover:text-primary">Cassino</Link></li>
                <li><Link href="/sports" className="hover:text-primary">Esportes</Link></li>
                <li><Link href="/promotions" className="hover:text-primary">Promoções</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-primary">Termos de Serviço</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Política de Privacidade</Link></li>
                <li><Link href="/responsible-gaming" className="hover:text-primary">Jogo Responsável</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Siga-nos</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Blaze Reborn. Todos os direitos reservados. Este é um projeto de estudo e não possui afiliação com a marca original.</p>
        </div>
      </div>
    </footer>
  );
}
