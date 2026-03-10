export default function Page() {
  return (
    <div className="p-10 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Exclusão de Conta - SnapLine
      </h1>

      <p className="mb-4">
        Esta página explica como você pode excluir sua conta no aplicativo <strong>SnapLine</strong>.
        O <strong>SnapLine</strong> permite que os usuários excluam suas contas diretamente pelo aplicativo.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Como excluir sua conta
      </h2>

      <p className="mb-4">
        Para excluir sua conta do <strong>SnapLine</strong>, siga os passos abaixo:
      </p>

      <ol className="list-decimal ml-6 mb-4">
        <li>Abra o aplicativo SnapLine.</li>
        <li>Vá até a aba <strong>Perfil</strong>.</li>
        <li>Localize a opção <strong>Excluir Conta</strong>.</li>
        <li>Confirme a exclusão da conta.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        O que acontece após a exclusão
      </h2>

      <p className="mb-4">
        Após confirmar a exclusão, sua conta e os dados associados serão removidos do aplicativo.
        Algumas informações podem ser mantidas temporariamente apenas quando necessário para
        cumprir obrigações legais ou melhorar a segurança do serviço.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Precisa de ajuda?
      </h2>

      <p>
        Caso tenha dificuldades para excluir sua conta ou precise de suporte,
        entre em contato pelo e-mail:
        {" "}
        <a href="mailto:mateuspele2015@gmail.com">
          mateuspele2015@gmail.com
        </a>.
      </p>
    </div>
  );
}