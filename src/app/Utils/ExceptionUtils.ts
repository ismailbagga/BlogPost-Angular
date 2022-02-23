export class ExceptionsUtils {
  public static MISSING_USER_INFO = 'Some user fields are empty';
  public static ALREADY_EXIST = 'user with this credential already exist';
  public static USER_DISABLE = 'User is disabled';
  public static BAD_CREDENTIALS = 'Bad credentials';
  public static EMAIL_ALREADY_USED = 'Email already used';
  public static USERNAME_ALREADY_USED = 'Email already used';
  public static USER_DOES_NOT_EXIST = 'USER DOES NOT EXIST';
  public static NULL_ID = 'this id is null';
  public static BLOG_DOEST_NOT_EXIST = 'this blog does not exist';
  public static MISSING_BLOG_TITLE = 'this blog doest not contain a title';
  public static BLOG_TITLE_EXIST = 'title taken';
  public static UN_AUTHORIZE_OPERATION =
    'this operation not authorize by this user';
  public static MISSING_USERNAME = 'this username doest not exist';
  public static MISSING_UUID = 'this UUID doest not exist';
  public static USER_NOT_SHARER = 'this user did not share this blog ';
  public static USER_NOT_LIKER = 'this user did not like this blog ';
  public static NO_VERIFICATION_WAS_FOUND = 'No verification token was found';
  public static USER_ENABLE = 'User is Enable';
  public static EMAIl_SPAM = 'user sent to many verification token';
  public static INVALID_VERIFICATION = 'This Verification Number is Wrong';
  public static NO_USER_WITH_EMAIL_Or_Username = 'not found';
}
