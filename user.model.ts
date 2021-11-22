export class User{
    mail_user: string;
    pass_user: string;
    movil_user: string;
    noMail(){
        return this.mail_user != '';
    }
}