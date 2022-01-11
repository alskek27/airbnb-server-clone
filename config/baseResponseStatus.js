module.exports = {

    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    // Common
    TOKEN_EMPTY : { "isSuccess": false, "code": 2000, "message":"JWT 토큰을 입력해주세요." },
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 3000, "message":"JWT 토큰 검증 실패" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 1001, "message":"JWT 토큰 검증 성공" },

    //Request error
    SIGNUP_FIRSTNAME_EMPTY : { "isSuccess": false, "code": 2001, "message":"이름을 입력해 주세요." },
    SIGNUP_LASTNAME_EMPTY : { "isSuccess": false, "code": 2002, "message":"성을 입력해 주세요." },
    SIGNUP_BIRTH_EMPTY : { "isSuccess": false, "code": 2003, "message":"생년월일을 입력해 주세요." },
    SIGNUP_EMAIL_EMPTY : { "isSuccess": false, "code": 2004, "message":"이메일을 입력해 주세요." },
    SIGNUP_EMAIL_LENGTH : { "isSuccess": false, "code": 2005, "message":"이메일은 30자리 미만으로 입력해 주세요." },
    SIGNUP_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2006, "message":"이메일을 형식을 정확하게 입력해 주세요." },
    SIGNUP_PASSWORD_EMPTY : { "isSuccess": false, "code": 2007, "message": "비밀번호를 입력해 주세요." },
    SIGNUP_PASSWORD_LENGTH : { "isSuccess": false, "code": 2008, "message":"비밀번호는 6~20자리를 입력해 주세요." },

    SIGNIN_EMAIL_EMPTY : { "isSuccess": false, "code": 2009, "message":"이메일을 입력해주세요" },
    SIGNIN_EMAIL_LENGTH : { "isSuccess": false, "code": 2010, "message":"이메일은 30자리 미만으로 입력해주세요." },
    SIGNIN_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2011, "message":"이메일을 형식을 정확하게 입력해주세요." },
    SIGNIN_PASSWORD_EMPTY : { "isSuccess": false, "code": 2012, "message": "비밀번호를 입력 해주세요." },
    SIGNIN_PASSWORD_LENGTH : { "isSuccess": false, "code": 2013, "message":"비밀번호는 6~20자리를 입력해 주세요." },

    USER_USERID_EMPTY : { "isSuccess": false, "code": 2013, "message": "userId를 입력해주세요." },
    USER_USERID_NOT_EXIST : { "isSuccess": false, "code": 2014, "message": "해당 회원이 존재하지 않습니다." },

    USER_USEREMAIL_EMPTY : { "isSuccess": false, "code": 2015, "message": "이메일을 입력해주세요." },
    USER_USEREMAIL_NOT_EXIST : { "isSuccess": false, "code": 2016, "message": "해당 이메일을 가진 회원이 존재하지 않습니다." },
    USER_ID_NOT_MATCH : { "isSuccess": false, "code": 2017, "message": "유저 아이디 값을 확인해주세요" },
    USER_NICKNAME_EMPTY : { "isSuccess": false, "code": 2018, "message": "변경할 닉네임 값을 입력해주세요" },

    USER_STATUS_EMPTY : { "isSuccess": false, "code": 2019, "message": "회원 상태값을 입력해주세요" },

    // Response error
    USER_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"중복된 이메일입니다." },
    USER_EMAIL_WRONG : { "isSuccess": false, "code": 3002, "message": "이메일이 잘못되었습니다." },
    USER_PASSWORD_WRONG : { "isSuccess": false, "code": 3003, "message": "비밀번호가 잘못되었습니다." },
    USER_INACTIVE_ACCOUNT : { "isSuccess": false, "code": 3004, "message": "비활성화된 계정입니다. 고객센터에 문의해 주세요." },
    USER_WITHDRAWAL_ACCOUNT : { "isSuccess": false, "code": 3005, "message": "탈퇴된 계정입니다. 고객센터에 문의해 주세요." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
 
 
}