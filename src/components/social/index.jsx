import { Container } from "./style"
import GithubImage from '../../assets/github.svg'
import LinkedinImage from '../../assets/linkedin.svg'
import CodeImage from '../../assets/code.svg'

export const SocialLinks = () => {
    const GITHUB_LINK = "https://github.com/giuseppebarbetta"
    const LINKEDIN_LINK = "https://www.linkedin.com/in/giuseppebarbetta/" 

    return (
        <Container>
            <div>
                <a href={GITHUB_LINK} target="blank">
                    <img src={GithubImage} alt="Github-logo" />
                </a>
                <a href={LINKEDIN_LINK} target="blank">
                    <img src={LinkedinImage} alt="Linkedin-logo" />
                </a>
            </div>

            <div>
                <img src={CodeImage} alt="code" />
                Giuseppe Barbetta
            </div>
        </Container>
    )
}