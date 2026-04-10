import { LegalLayout } from "@/components/legal-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LGPD — MINDLOOP",
  description: "Compromisso da MINDLOOP LTDA com a Lei Geral de Proteção de Dados.",
};

export default function LGPD() {
  return (
    <LegalLayout title={"LGPD \u2014 Prote\u00e7\u00e3o de Dados"} lastUpdated="02 de abril de 2026">
      <p>
        A MINDLOOP LTDA (CNPJ 60.533.533/0001-60) est&aacute; comprometida com o cumprimento da
        Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais (Lei n&ordm; 13.709/2018 &mdash; LGPD).
        Este documento detalha como tratamos dados pessoais em conformidade com a legisla&ccedil;&atilde;o.
      </p>

      <h2>1. Controlador de dados</h2>
      <p>
        A MINDLOOP atua como <strong>controladora</strong> dos dados pessoais coletados
        atrav&eacute;s deste site (formul&aacute;rios de contato, cookies). Quando presta servi&ccedil;os
        de IA para clientes, a MINDLOOP atua como <strong>operadora</strong> dos dados
        do cliente, seguindo as instru&ccedil;&otilde;es do controlador (o pr&oacute;prio cliente).
      </p>

      <h2>2. Encarregado de dados (DPO)</h2>
      <p>
        Para quest&otilde;es relacionadas &agrave; prote&ccedil;&atilde;o de dados pessoais, entre em contato com
        nosso encarregado:
      </p>
      <ul>
        <li><strong>E-mail:</strong> <a href="mailto:contato@mindloop.com.br">contato@mindloop.com.br</a></li>
        <li><strong>Assunto:</strong> &ldquo;LGPD &mdash; [sua solicita&ccedil;&atilde;o]&rdquo;</li>
        <li><strong>Prazo de resposta:</strong> at&eacute; 15 dias &uacute;teis</li>
      </ul>

      <h2>3. Dados tratados e finalidades</h2>

      <h3>3.1 Dados coletados pelo site</h3>
      <ul>
        <li><strong>Formul&aacute;rio de contato:</strong> nome, e-mail, empresa, setor, n&uacute;mero de funcion&aacute;rios, mensagem. <em>Finalidade:</em> atendimento comercial. <em>Base legal:</em> leg&iacute;timo interesse (art. 7&ordm;, IX).</li>
        <li><strong>Cookies anal&iacute;ticos:</strong> dados de navega&ccedil;&atilde;o anonimizados. <em>Finalidade:</em> melhoria do site. <em>Base legal:</em> consentimento (art. 7&ordm;, I).</li>
      </ul>

      <h3>3.2 Dados tratados na presta&ccedil;&atilde;o de servi&ccedil;os</h3>
      <ul>
        <li><strong>Dados dos clientes do nosso cliente:</strong> mensagens de WhatsApp, e-mails, dados de CRM que alimentam os agentes de IA. <em>Finalidade:</em> opera&ccedil;&atilde;o dos agentes contratados. <em>Base legal:</em> execu&ccedil;&atilde;o de contrato (art. 7&ordm;, V). <em>Papel da MINDLOOP:</em> operadora.</li>
      </ul>

      <h2>4. Medidas de seguran&ccedil;a</h2>
      <p>Implementamos as seguintes medidas t&eacute;cnicas e organizacionais:</p>
      <ul>
        <li><strong>Criptografia:</strong> TLS 1.3 em tr&acirc;nsito, AES-256 em repouso.</li>
        <li><strong>Controle de acesso:</strong> Row Level Security (RLS) no banco de dados, princ&iacute;pio do menor privil&eacute;gio.</li>
        <li><strong>Infraestrutura:</strong> servidores em regi&atilde;o sa-east-1 (S&atilde;o Paulo), com backups autom&aacute;ticos.</li>
        <li><strong>Auditoria:</strong> logs de acesso a dados pessoais.</li>
        <li><strong>Arquitetura model-agnostic:</strong> dados do cliente nunca s&atilde;o usados para treinar modelos de terceiros sem autoriza&ccedil;&atilde;o expl&iacute;cita.</li>
      </ul>

      <h2>5. Compartilhamento e transfer&ecirc;ncia internacional</h2>
      <p>
        Utilizamos provedores de infraestrutura que podem processar dados fora do Brasil:
      </p>
      <ul>
        <li><strong>Supabase:</strong> banco de dados (sa-east-1, S&atilde;o Paulo).</li>
        <li><strong>Vercel:</strong> hospedagem (edge functions globais, dados sens&iacute;veis em sa-east-1).</li>
        <li><strong>OpenAI / Anthropic / Google:</strong> processamento de linguagem natural (quando o agente processa texto). Dados transitam por servidores nos EUA.</li>
      </ul>
      <p>
        A transfer&ecirc;ncia internacional &eacute; realizada com base no art. 33, II da LGPD
        (cl&aacute;usulas contratuais espec&iacute;ficas) e nos compromissos p&uacute;blicos de conformidade
        dos provedores.
      </p>

      <h2>6. Reten&ccedil;&atilde;o de dados</h2>
      <ul>
        <li><strong>Leads (formul&aacute;rio do site):</strong> 2 anos ap&oacute;s o &uacute;ltimo contato, ou at&eacute; solicita&ccedil;&atilde;o de exclus&atilde;o.</li>
        <li><strong>Dados contratuais:</strong> 5 anos ap&oacute;s o encerramento do contrato (obriga&ccedil;&atilde;o legal).</li>
        <li><strong>Dados de agentes do cliente:</strong> exclu&iacute;dos em at&eacute; 30 dias ap&oacute;s encerramento do servi&ccedil;o, salvo solicita&ccedil;&atilde;o de exporta&ccedil;&atilde;o.</li>
      </ul>

      <h2>7. Direitos do titular</h2>
      <p>Conforme os artigos 17 a 22 da LGPD, voc&ecirc; tem direito a:</p>
      <ul>
        <li>Confirma&ccedil;&atilde;o da exist&ecirc;ncia de tratamento.</li>
        <li>Acesso aos dados pessoais.</li>
        <li>Corre&ccedil;&atilde;o de dados incompletos, inexatos ou desatualizados.</li>
        <li>Anonimiza&ccedil;&atilde;o, bloqueio ou elimina&ccedil;&atilde;o de dados desnecess&aacute;rios ou tratados em desconformidade.</li>
        <li>Portabilidade dos dados a outro fornecedor de servi&ccedil;o.</li>
        <li>Elimina&ccedil;&atilde;o dos dados tratados com consentimento.</li>
        <li>Informa&ccedil;&atilde;o sobre entidades com as quais os dados foram compartilhados.</li>
        <li>Informa&ccedil;&atilde;o sobre a possibilidade de n&atilde;o fornecer consentimento e sobre as consequ&ecirc;ncias da negativa.</li>
        <li>Revoga&ccedil;&atilde;o do consentimento.</li>
      </ul>

      <h2>8. Incidentes de seguran&ccedil;a</h2>
      <p>
        Em caso de incidente de seguran&ccedil;a que possa acarretar risco ou dano relevante aos
        titulares, a MINDLOOP se compromete a:
      </p>
      <ul>
        <li>Comunicar a Autoridade Nacional de Prote&ccedil;&atilde;o de Dados (ANPD) em at&eacute; 72 horas.</li>
        <li>Notificar os titulares afetados em prazo razo&aacute;vel.</li>
        <li>Documentar o incidente e as medidas corretivas adotadas.</li>
      </ul>

      <h2>9. Compromisso com IA respons&aacute;vel</h2>
      <p>A MINDLOOP se compromete com pr&aacute;ticas de IA respons&aacute;vel:</p>
      <ul>
        <li>Transpar&ecirc;ncia sobre o uso de IA nas intera&ccedil;&otilde;es com usu&aacute;rios finais.</li>
        <li>Supervis&atilde;o humana em decis&otilde;es cr&iacute;ticas (sa&uacute;de, jur&iacute;dico, financeiro).</li>
        <li>Monitoramento cont&iacute;nuo de vieses e hallucina&ccedil;&otilde;es via MINDLOOP Ops.</li>
        <li>Conformidade com o Marco Legal da IA (PL 2338/2023) quando promulgado.</li>
      </ul>

      <h2>10. Contato</h2>
      <p>
        MINDLOOP LTDA<br />
        CNPJ: 60.533.533/0001-60<br />
        E-mail: <a href="mailto:contato@mindloop.com.br">contato@mindloop.com.br</a><br />
        Assunto: &ldquo;LGPD &mdash; [sua solicita&ccedil;&atilde;o]&rdquo;
      </p>
    </LegalLayout>
  );
}
