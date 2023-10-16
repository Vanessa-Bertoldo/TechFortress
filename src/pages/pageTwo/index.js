import PostModel from "components/postModel";
import styles from "./PageTwo.module.css";
import backgroundPhotoProgr from "../../assets/program.jpg"
import photoApps from "../../assets/apps.jpg";


export default function PageTwo(){
    return(
        <PostModel
            photo={backgroundPhotoProgr}
            title={"Cibersegurança"}
        >
            <h3 className={styles.subtitulo}>
                Desvendando o Universo da Cibersegurança
            </h3>
            <img
                src={photoApps}
                alt="Aplicativos em um celular"
                className={styles.photo}
            />
            <p className={styles.paragrafo}>
            Bem-vindo ao fascinante universo da cibersegurança, um ecossistema complexo e dinâmico onde a proteção de dados, a mitigação de riscos e o fortalecimento da resiliência digital são os pilares fundamentais. A era digital trouxe consigo inúmeros avanços tecnológicos, conectando o mundo de formas antes inimagináveis. No entanto, essa interconexão também trouxe desafios significativos, colocando em risco informações sensíveis e a segurança de indivíduos, organizações e nações.
            </p>
            <p className={styles.paragrafo}>
            A cibersegurança é mais do que apenas implementar sistemas de proteção; é um campo em constante evolução, que exige um entendimento abrangente das ameaças cibernéticas e das estratégias necessárias para enfrentá-las. A proteção dos dados é o alicerce dessa segurança, envolvendo práticas robustas de criptografia, controle de acesso e monitoramento constante. Garantir a integridade, confidencialidade e disponibilidade dos dados é crucial para manter a confiança e a credibilidade no mundo digital.
            </p>
            <p className={styles.paragrafo}> 
            Além da proteção dos dados, a cibersegurança também se concentra na mitigação de riscos, reconhecendo que as ameaças estão em constante mutação e se tornando cada vez mais sofisticadas. Isso requer uma abordagem proativa, incluindo a identificação precoce de vulnerabilidades, análise de ameaças e resposta eficaz a incidentes. A colaboração entre organizações e o compartilhamento de informações são cruciais nesse cenário, permitindo uma melhor preparação e defesa coletiva contra ciberataques.
            </p>
            <p className={styles.paragrafo}>
            Fortalecer a resiliência digital significa não apenas proteger-se contra ameaças, mas também garantir a capacidade de se recuperar e se adaptar após um incidente. Isso envolve planos de continuidade de negócios, treinamento de equipes, simulações de incidentes e avaliações de danos potenciais. A cibersegurança é uma jornada contínua, e a resiliência digital é o motor que impulsiona a adaptação e o progresso em um mundo digital em constante mudança.
            </p>
            <p className={styles.paragrafo}>
            Neste universo em constante evolução, é essencial que indivíduos e organizações estejam preparados para enfrentar os desafios da cibersegurança de maneira proativa e eficaz. Juntos, podemos desvendar as complexidades desse universo, protegendo nossos dados, mitigando os riscos e fortalecendo nossa resiliência digital para um futuro seguro e confiável.
            </p>
        </PostModel>
    )
}