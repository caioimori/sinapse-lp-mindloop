import { LegalLayout } from "@/components/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso \u2014 MINDLOOP",
  description: "Termos de uso da MINDLOOP LTDA.",
};

export default function Termos() {
  return (
    <LegalLayout title={"Termos de Uso"} lastUpdated="02 de abril de 2026">
      <p>
        Estes Termos de Uso regulam o acesso e a utiliza&ccedil;&atilde;o do site e dos servi&ccedil;os oferecidos pela
        MINDLOOP LTDA, inscrita no CNPJ sob o n&ordm; 60.533.533/0001-60 (&ldquo;MINDLOOP&rdquo;).
        Ao utilizar nossos servi&ccedil;os, voc&ecirc; concorda com estes termos.
      </p>

      <h2>1. Defini&ccedil;&otilde;es</h2>
      <ul>
        <li><strong>Servi&ccedil;os:</strong> solu&ccedil;&otilde;es de intelig&ecirc;ncia artificial, incluindo agentes de IA, automa&ccedil;&atilde;o de processos, consultoria, treinamento e desenvolvimento de software.</li>
        <li><strong>Usu&aacute;rio:</strong> pessoa f&iacute;sica ou jur&iacute;dica que acessa o site ou contrata servi&ccedil;os.</li>
        <li><strong>Agentes:</strong> sistemas de IA configurados e operados pela MINDLOOP em nome do cliente.</li>
      </ul>

      <h2>2. Servi&ccedil;os oferecidos</h2>
      <p>A MINDLOOP oferece:</p>
      <ul>
        <li><strong>MINDLOOP Agents:</strong> configura&ccedil;&atilde;o, deploy e opera&ccedil;&atilde;o de agentes de IA.</li>
        <li><strong>MINDLOOP Ops:</strong> monitoramento e otimiza&ccedil;&atilde;o cont&iacute;nua de agentes.</li>
        <li><strong>MINDLOOP Academy:</strong> treinamentos e workshops sobre IA aplicada.</li>
        <li><strong>MINDLOOP Studio:</strong> desenvolvimento custom de solu&ccedil;&otilde;es com IA.</li>
      </ul>
      <p>Os servi&ccedil;os espec&iacute;ficos, prazos e valores s&atilde;o definidos em proposta comercial individual.</p>

      <h2>3. Obriga&ccedil;&otilde;es do usu&aacute;rio</h2>
      <ul>
        <li>Fornecer informa&ccedil;&otilde;es verdadeiras e atualizadas.</li>
        <li>N&atilde;o utilizar os servi&ccedil;os para fins ilegais, abusivos ou que violem direitos de terceiros.</li>
        <li>Manter a confidencialidade das credenciais de acesso aos dashboards e sistemas.</li>
        <li>Garantir que os dados fornecidos para treinamento dos agentes n&atilde;o violem legisla&ccedil;&atilde;o vigente.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todo o conte&uacute;do do site (textos, design, c&oacute;digo, marca) &eacute; propriedade da MINDLOOP LTDA,
        protegido pela Lei de Direitos Autorais (Lei n&ordm; 9.610/98) e pela Lei de Propriedade
        Industrial (Lei n&ordm; 9.279/96). A marca MINDLOOP est&aacute; registrada no INPI (processos
        n&ordm; 939837099 e 939838583).
      </p>
      <p>
        Os agentes de IA configurados para o cliente s&atilde;o licenciados durante a vig&ecirc;ncia do contrato.
        Dados de treinamento fornecidos pelo cliente permanecem de propriedade do cliente.
      </p>

      <h2>5. Limita&ccedil;&atilde;o de responsabilidade</h2>
      <ul>
        <li>A MINDLOOP n&atilde;o garante que os agentes de IA estar&atilde;o livres de erros ou interrup&ccedil;&otilde;es, salvo SLA contratado.</li>
        <li>N&atilde;o nos responsabilizamos por decis&otilde;es tomadas exclusivamente com base em outputs de IA sem supervis&atilde;o humana.</li>
        <li>A responsabilidade da MINDLOOP &eacute; limitada ao valor total pago pelo cliente nos &uacute;ltimos 12 meses.</li>
      </ul>

      <h2>6. Pagamento e cancelamento</h2>
      <ul>
        <li>O setup &eacute; cobrado uma &uacute;nica vez, no in&iacute;cio do projeto.</li>
        <li>O retainer mensal &eacute; cobrado antecipadamente, com vencimento no dia 5 de cada m&ecirc;s.</li>
        <li>O cancelamento pode ser solicitado com 30 dias de anteced&ecirc;ncia, sem multa.</li>
        <li>Ap&oacute;s o cancelamento, os agentes s&atilde;o desativados e os dados do cliente ficam dispon&iacute;veis para exporta&ccedil;&atilde;o por 30 dias.</li>
      </ul>

      <h2>7. Confidencialidade</h2>
      <p>
        Ambas as partes se comprometem a manter sigilo sobre informa&ccedil;&otilde;es confidenciais
        compartilhadas durante a presta&ccedil;&atilde;o dos servi&ccedil;os, pelo prazo de 2 anos ap&oacute;s o
        encerramento do contrato.
      </p>

      <h2>8. Altera&ccedil;&otilde;es nos termos</h2>
      <p>
        Reservamo-nos o direito de atualizar estes termos. Altera&ccedil;&otilde;es materiais ser&atilde;o
        comunicadas por e-mail com 15 dias de anteced&ecirc;ncia.
      </p>

      <h2>9. Foro</h2>
      <p>
        Fica eleito o foro da comarca de S&atilde;o Paulo/SP para dirimir quaisquer quest&otilde;es
        oriundas destes Termos de Uso, com ren&uacute;ncia a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>10. Contato</h2>
      <p>
        MINDLOOP LTDA<br />
        CNPJ: 60.533.533/0001-60<br />
        E-mail: <a href="mailto:contato@mindloop.com.br">contato@mindloop.com.br</a>
      </p>
    </LegalLayout>
  );
}
