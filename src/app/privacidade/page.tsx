import { LegalLayout } from "@/components/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pol\u00edtica de Privacidade \u2014 MINDLOOP",
  description: "Pol\u00edtica de privacidade da MINDLOOP LTDA.",
};

export default function Privacidade() {
  return (
    <LegalLayout title={"Pol\u00edtica de Privacidade"} lastUpdated="02 de abril de 2026">
      <p>
        A MINDLOOP LTDA, inscrita no CNPJ sob o n&ordm; 60.533.533/0001-60 (&ldquo;MINDLOOP&rdquo;, &ldquo;n&oacute;s&rdquo;),
        est&aacute; comprometida com a prote&ccedil;&atilde;o da privacidade dos seus usu&aacute;rios. Esta Pol&iacute;tica de
        Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informa&ccedil;&otilde;es pessoais.
      </p>

      <h2>1. Informa&ccedil;&otilde;es que coletamos</h2>
      <p>Coletamos as seguintes categorias de dados pessoais:</p>
      <ul>
        <li><strong>Dados de identifica&ccedil;&atilde;o:</strong> nome, e-mail, nome da empresa, cargo.</li>
        <li><strong>Dados profissionais:</strong> setor de atua&ccedil;&atilde;o, n&uacute;mero de funcion&aacute;rios, descri&ccedil;&atilde;o do desafio/necessidade.</li>
        <li><strong>Dados de navega&ccedil;&atilde;o:</strong> endere&ccedil;o IP, tipo de navegador, p&aacute;ginas visitadas, tempo de acesso.</li>
        <li><strong>Dados de comunica&ccedil;&atilde;o:</strong> mensagens enviadas pelo formul&aacute;rio de contato ou e-mail.</li>
      </ul>

      <h2>2. Como utilizamos suas informa&ccedil;&otilde;es</h2>
      <p>Seus dados pessoais s&atilde;o utilizados para:</p>
      <ul>
        <li>Responder &agrave; sua solicita&ccedil;&atilde;o de contato e elaborar propostas comerciais.</li>
        <li>Prestar os servi&ccedil;os contratados (agentes de IA, consultoria, treinamento).</li>
        <li>Enviar comunica&ccedil;&otilde;es relevantes sobre nossos servi&ccedil;os (com seu consentimento).</li>
        <li>Melhorar a experi&ecirc;ncia de navega&ccedil;&atilde;o e a qualidade do nosso site.</li>
        <li>Cumprir obriga&ccedil;&otilde;es legais e regulat&oacute;rias.</li>
      </ul>

      <h2>3. Base legal para o tratamento</h2>
      <p>
        Tratamos seus dados com base nas seguintes hip&oacute;teses da Lei Geral de Prote&ccedil;&atilde;o de Dados
        (Lei n&ordm; 13.709/2018 &mdash; LGPD):
      </p>
      <ul>
        <li><strong>Consentimento</strong> (art. 7&ordm;, I): para envio de comunica&ccedil;&otilde;es de marketing.</li>
        <li><strong>Execu&ccedil;&atilde;o de contrato</strong> (art. 7&ordm;, V): para presta&ccedil;&atilde;o dos servi&ccedil;os contratados.</li>
        <li><strong>Leg&iacute;timo interesse</strong> (art. 7&ordm;, IX): para melhoria dos servi&ccedil;os e an&aacute;lise de uso.</li>
        <li><strong>Obriga&ccedil;&atilde;o legal</strong> (art. 7&ordm;, II): para cumprimento de normas fiscais e regulat&oacute;rias.</li>
      </ul>

      <h2>4. Compartilhamento de dados</h2>
      <p>N&atilde;o vendemos seus dados pessoais. Podemos compartilh&aacute;-los com:</p>
      <ul>
        <li><strong>Provedores de infraestrutura:</strong> Vercel (hospedagem), Supabase (banco de dados), cujos servidores est&atilde;o na regi&atilde;o sa-east-1 (S&atilde;o Paulo).</li>
        <li><strong>Provedores de IA:</strong> OpenAI, Anthropic, Google (para processamento de agentes contratados).</li>
        <li><strong>Autoridades:</strong> quando exigido por lei ou ordem judicial.</li>
      </ul>

      <h2>5. Armazenamento e seguran&ccedil;a</h2>
      <p>
        Seus dados s&atilde;o armazenados em servidores seguros com criptografia em tr&acirc;nsito (TLS 1.3)
        e em repouso. Aplicamos pol&iacute;ticas de acesso restrito (Row Level Security) e backups regulares.
        O per&iacute;odo de reten&ccedil;&atilde;o &eacute; de 5 anos ap&oacute;s o &uacute;ltimo contato ou pelo prazo exigido por lei.
      </p>

      <h2>6. Seus direitos (LGPD)</h2>
      <p>Voc&ecirc; tem direito a:</p>
      <ul>
        <li>Confirmar a exist&ecirc;ncia de tratamento de dados.</li>
        <li>Acessar seus dados pessoais.</li>
        <li>Corrigir dados incompletos ou desatualizados.</li>
        <li>Solicitar anonimiza&ccedil;&atilde;o, bloqueio ou elimina&ccedil;&atilde;o de dados desnecess&aacute;rios.</li>
        <li>Revogar consentimento a qualquer momento.</li>
        <li>Solicitar portabilidade dos dados.</li>
        <li>Obter informa&ccedil;&otilde;es sobre entidades com as quais seus dados foram compartilhados.</li>
      </ul>
      <p>
        Para exercer seus direitos, entre em contato: <a href="mailto:contato@mindloop.com.br">contato@mindloop.com.br</a>.
        Responderemos em at&eacute; 15 dias &uacute;teis.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Utilizamos cookies estritamente necess&aacute;rios para o funcionamento do site e cookies anal&iacute;ticos
        (an&ocirc;nimos) para melhoria da experi&ecirc;ncia. Voc&ecirc; pode desativ&aacute;-los nas configura&ccedil;&otilde;es do navegador.
      </p>

      <h2>8. Altera&ccedil;&otilde;es nesta pol&iacute;tica</h2>
      <p>
        Podemos atualizar esta pol&iacute;tica periodicamente. A data da &uacute;ltima atualiza&ccedil;&atilde;o ser&aacute; sempre
        indicada no topo desta p&aacute;gina. Recomendamos a leitura peri&oacute;dica.
      </p>

      <h2>9. Contato</h2>
      <p>
        MINDLOOP LTDA<br />
        CNPJ: 60.533.533/0001-60<br />
        E-mail: <a href="mailto:contato@mindloop.com.br">contato@mindloop.com.br</a><br />
        Site: mindloop.com.br
      </p>
    </LegalLayout>
  );
}
