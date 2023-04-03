import styles from "../style.module.css";
const TextArea=()=>{
    return(
        <div className={styles.TextArea}>
            <table>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Atchaya S</td>
                </tr>
                <tr>
                    <td>Degree </td>
                    <td>B.Tech IT (II year)</td>
                </tr>
                <tr>
                    <td>Institution</td>
                    <td className={styles.clg}>SASTRA Deemed university</td>
                </tr>
                <tr>
                    <td>Skills</td>
                    <td>HTML5,CSS,js,react.js,Figma</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td className={styles.link}><a href="https://github.com/Atchaya211" rel="noreferrer noopener" target="_blank">https://github.com/Atchaya211</a></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>8072445488</td>
                </tr>
                <tr>
                    <td>Mail_ID</td>
                    <td><a href="mailto:atchaya211@gmail.com">atchaya211@gmail.com</a></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>101/34A,RK Nagar,</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pannavayal road,</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Pattukkottai.</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default TextArea;