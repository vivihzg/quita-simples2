import * as React from "react";
import * as styles from "../components/index.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const PoliticaPrivacidade = () => (
    <>
        <Header />
        <div className={styles.politicaContainer}>
            <h2>Política de Privacidade</h2>

            <p>Na Quita Simples, valorizamos a privacidade e a segurança das informações dos nossos usuários e visitantes. O acesso ao nosso conteúdo é livre e gratuito, embora em alguns casos possamos solicitar o cadastro prévio.</p>

            <h3>Coleta e Uso de Informações</h3>

            <p>As informações que você nos fornece ao se cadastrar, assim como os dados coletados automaticamente enquanto você navega pelo nosso site, são transmitidos de forma segura e armazenados em nossos sistemas com alta proteção. Utilizamos cookies para entender como você interage com o site, o que nos ajuda a melhorar continuamente a experiência de navegação.</p>

            <h3>Tratamento de Dados Pessoais</h3>

            <p>Os dados pessoais coletados são usados exclusivamente para melhorar os serviços que oferecemos e para gerar estatísticas de uso, sempre de forma agregada, garantindo que os dados individuais não sejam expostos. Em alguns casos, podemos identificar informações com base em localização geográfica para aprimorar nossos serviços, mas isso é feito com total respeito à sua privacidade.</p>

            <h3>Uso de Google Analytics</h3>

            <p>Para entender melhor como nossos visitantes interagem com o site, utilizamos o Google Analytics. Esta ferramenta nos ajuda a analisar o comportamento de navegação, permitindo que melhoremos o conteúdo e a funcionalidade do nosso site. O Google Analytics coleta informações de maneira anônima, o que significa que não identificamos pessoalmente nossos visitantes. Você pode optar por desativar os cookies do Google Analytics através das configurações do seu navegador, se preferir.</p>

            <h3>Compartilhamento de Informações</h3>

            <p>As informações que coletamos não são compartilhadas com terceiros, exceto em casos de exigência legal ou judicial. Nos comprometemos a proteger suas informações e garantir que elas sejam usadas apenas para os fins descritos nesta política.</p>

            <h3>Segurança e Integridade</h3>

            <p>Adotamos medidas rigorosas de segurança para proteger seus dados contra acessos não autorizados e outras ameaças. Estamos continuamente atualizando nossas práticas para garantir a máxima proteção de suas informações.</p>

            <h3>Atualizações desta Política</h3>

            <p>Podemos atualizar nossa política de privacidade periodicamente para refletir mudanças em nossos serviços ou em requisitos legais. Recomendamos que você visite esta página regularmente para se manter informado sobre como protegemos seus dados.</p>
        </div>
        <Footer />
    </>
)
export default PoliticaPrivacidade