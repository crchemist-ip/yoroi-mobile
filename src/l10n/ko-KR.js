// @flow
import {pluralizeEn, bold, normal, inline} from './util'
import {termsOfService} from './tos.en'

// Do not translate
const languages = {
  chineseSimplified: '简体中文',
  chineseTraditional: '繁體中文',
  english: 'English',
  japanese: '日本語',
  korean: '한국어',
  russian: 'Russian',
}

const datetime = {
  today: '오늘',
  yesterday: '어제',
}

const walletNameErrors = {
  tooLong: '지갑명은 40자를 초과할 수 없습니다',
  nameAlreadyTaken: '이 지갑명은 이미 사용중입니다.',
}

// common translations shared across multiple places
const common = {
  ok: 'OK',
  availableFunds: '사용 가능한 금액',
  pleaseWait: '잠시 기다려 주십시오 ...',
}

// ios system translations
const ios = {
  NSFaceIDUsageDescription:
    'Face ID를 사용하여 보다 안전하고 간편하게 계좌에 엑세스 하는게 가능합니다.',
  NSCameraUsageDescription: '카메라를 사용하여 QR코드를 스캔할 수 있습니다.',
}

const l10n = {
  global: {
    languages,
    datetime,
    ios,
    notifications: {
      offline: '현재 오프라인 상태입니다. 디바이스 설정을 확인해 주세요.',
    },
    currentLanguageName: '한국어',
  },
  confirmationDialogs: {
    logout: {
      title: '로그아웃',
      message: '로그아웃 하시겠습니까?',
      yesButton: '네',
      noButton: '아니오',
    },
  },
  errorDialogs: {
    generalError: (message: string) => ({
      title: '에러가 발생했습니다',
      message: `요청한 작업을 수행하지 못했습니다. 아래와 같은 에러가 발생했습니다: ${message}`,
      yesButton: common.ok,
    }),
    pinMismatch: {
      title: '유효하지 않는 PIN',
      message: 'PIN가 일치하지 않습니다.',
      yesButton: common.ok,
    },
    incorrectPin: {
      title: '유효하지 않는 PIN',
      message: '입력하신 PIN가 올바르지 않습니다.',
      yesButton: common.ok,
    },
    incorrectPassword: {
      title: '잘못된 비밀번호',
      message: '비밀번호가 올바르지 않습니다.',
      yesButton: common.ok,
    },
    biometricsIsTurnedOff: {
      title: '생체인식이 비활성화 되어 있습니다',
      message: '생체인식 기능이 현재 비활성화 되어 있으므로 활성화 시켜 주십시오.',
      yesButton: common.ok,
    },
    walletKeysInvalidated: {
      title: '생체인식 활성화',
      message:
        '스마트폰의 생체인식 변경이 탐지되었습니다. ' +
        '따라서 생체인식에 의한 간편거래 승인은 사용할 수 없게 되었으며. ' +
        '마스터 비밀번호를 이용한 거래 승인만 허용됩니다. ' +
        '설정에서 간편결제 승인을 재설정 할 수 있습니다.',
      yesButton: 'OK',
    },
    networkError: {
      title: '네트워크 에러',
      message:
        '서버에 접속하는데 문제가 발생했습니다. ' +
        '인터넷이 연결되어 있는지 확인해 주십시오.',
      yesButton: common.ok,
    },
    disableEasyConfirmationFirst: {
      title: '조치 실패',
      message:
        '우선 지갑내의 모든 간편 승인 기능을 비활성화 ' +
        해주십시오
      yesButton: common.ok,
    },
    enableFingerprintsFirst: {
      title: '조치 실패',
      message:
        '생체인식을 어플리케이션과 연동하기 위해서는, 우선 장치내의 생체인식 ' +
        '기능이 활성화 되어야 합니다',
      yesButton: 'OK',
    },
    enableSystemAuthFirst: {
      title: '화면 잠금 해제',
      message:
        '스마트폰의 화면 잠금 기능이 비활성화 되어 있는 경우, 우선 간편거래 승인을 ' +
        '비활성화 해야 합니다. 사용하고 있는 스마트폰에 ' +
        '화면 잠금 기능 (PIN / 비밀번호 / 패턴) 을 설정하고 ' +
        '어플케이션을 다시 시작해 주십시오. 그 후 스마트폰의 ' +
        화면 잠금을 해제하고 ' +
        어플리케이션을 이용할 수 있습니다.
      yesButton: 'OK',
    },
    wrongPinError: {
      title: '유효하지 않는 PIN',
      message: 'PIN 이 잘못되었습니다.',
      yesButton: 'OK',
    },
  },
  LanguageSelectionScreen: {
    languages,
    continueButton: '언어를 선택해 주십시오',
  },
  YoroiDescription: {
    line1: '요로이는 카르다노를 위한 웹 기반의 라이트 월렛입니다.',
    line2: 'Secure Fast Simple',
    byEmurgo: 'By',
  },
  AppStartScreen: {
    loginButton: '로그인',
  },
  WithPinLoginScreen: {
    title: 'PIN 입력',
  },
  CreateWalletScreen: {
    title: '새로운 지갑 만들기',
  },
  CreateOrRestoreWalletScreen: {
    title: '지갑 추가하기',
    createWalletButton: '새로운 지갑 만들기',
    restoreWalletButton: '백업에서 지갑 복원하기',
  },
  // On CreateWalletScreen
  MnemonicExplanationModal: {
    paragraph1: [
      inline([
        normal(
          '다음 화면에서 무작위로 선정된 15개의 단어가 나타납니다. ',
        ),
        normal('이것은 당신의 '),
        bold('지갑 복구구절 입니다. '),
        normal('이 구절은 요로의 지갑의 모든 버전에서 '),
        normal('사용자의 자금이나 개인키를 '),
        normal('복구하는데 사용할 수 있습니다.'),
      ]),
    ],
    paragraph2: [
      inline([
        normal('다른 사람이'),
        bold('지갑의 자금에 대한 접근이 허용되지 않도록 '),
        normal('화면을 잘 가려서 사용해 주십시오.'),
      ]),
    ],
    nextButton: '내용을 확인했습니다',
  },
  WalletNameAndPasswordForm: {
    walletNameInput: {
      label: '지갑명',
      errors: walletNameErrors,
    },
    newPasswordInput: {
      label: '지갑 비밀번호',
    },
    repeatPasswordInput: {
      label: '비밀번호 재입력',
      errors: {
        passwordsDoNotMatch: '비밀번호가 일치하지 않습니다',
      },
    },
    continueButton: '계속',
  },
  PasswordStrengthIndicator: {
    passwordRequirementsNote: '비밀번호는 적어도:',
    passwordMinLength: '7개의 문자',
    passwordUpperChar: '1개의 대문자',
    passwordLowerChar: '1개의 소문자',
    passwordNumber: '1개의 숫자를 포함해야 합니다',
    continueButton: '계속',
    passwordBigLength: '12개의 문자',
    or: '또는',
  },
  TransactionHistoryScreeen: {
    syncErrorBanner: {
      textWithoutRefresh: '동기화 문제가 발생하였습니다.',
      textWithRefresh:
        'We are experiencing synchronization issues. 새로고침 해주십시오',
    },
    availableFundsBanner: {
      label: common.availableFunds,
    },
    noTransactions: '아직 거래내역이 없습니다',
    transaction: {
      transactionType: {
        SENT: '보낸 ADA',
        RECEIVED: '받은 ADA',
        SELF: 'Intrawallet',
        MULTI: 'Multiparty',
      },
      assuranceLevelHeader: '보증 등급:',
      assuranceLevel: {
        LOW: '낮음',
        MEDIUM: '중간',
        HIGH: '높음',
        PENDING: '보류',
        FAILED: '실패',
      },
      fee: '요금:',
    },
    sendButton: '보내기',
    receiveButton: '받기',
  },
  TransactionDetailsScreen: {
    transactionType: {
      SENT: '보낸 금액',
      RECEIVED: '받은 금액',
      SELF: 'Intrawallet transaction',
      MULTI: 'Multi-party transaction',
    },
    fee: '수수료: ',
    fromAddresses: '보내진 주소',
    toAddresses: '보낸 주소',
    transactionId: '거래 ID',
    txAssuranceLevel: '거래 보증 등급',
    formatConfirmations: (cnt: number) =>
      `${cnt} ${pluralizeEn(cnt, 'CONFIRMATION', 'CONFIRMATIONS')}`,
    formatOmittedCount: (cnt: number) => `+ ${cnt} omitted`,
    addressPrefix: {
      receive: (idx: number) => `/${idx}`,
      change: (idx: number) => '/change',
      notMine: 'not mine',
    },
  },
  SendAdaScreen: {
    title: 'Send',
    fee: {
      label: 'Fee',
      notAvailable: '-',
    },
    balanceAfter: {
      label: 'Balance after',
      notAvailable: '-',
    },
    availableFundsBanner: {
      label: common.availableFunds,
      isFetching: 'Checking balance...',
      notAvailable: '-',
    },
    addressInput: {
      label: 'Address',
      errors: {
        invalidAddress: 'Please enter valid address',
      },
    },
    amountInput: {
      label: 'Amount',
      errors: {
        invalidAmount: {
          // Note(ppershing): first two should be auto-corrected
          // by the input control
          INVALID_AMOUNT: 'Please enter valid amount',
          TOO_MANY_DECIMAL_PLACES: 'Please enter valid amount',

          TOO_LARGE: 'Amount too large',
          NEGATIVE: 'Amount must be positive',
        },
        insufficientBalance: 'Not enough money to make this transaction',
      },
    },
    continueButton: 'Continue',
    errorBanners: {
      // note: offline banner is shared with TransactionHistory
      networkError:
        'We are experiencing issues with fetching your current balance. ' +
        'Click to retry.',
      pendingOutgoingTransaction:
        'You cannot send a new transaction while ' +
        'an existing one is still pending',
    },
  },
  ReadQRCodeAddressScreen: {
    title: 'Scan QR code address',
  },
  ConfirmSendAdaScreen: {
    title: 'Send',
    amount: 'Amount',
    availableFundsBanner: {
      label: common.availableFunds,
    },
    balanceAfterTx: 'Balance after transaction',
    fees: 'Fees',
    password: 'Wallet password',
    receiver: 'Receiver',
    confirmButton: 'Confirm',
    sendingModalTitle: 'Submitting transaction',
    pleaseWait: common.pleaseWait,
  },
  WalletCredentialsScreen: {
    title: 'Wallet credentials',
  },
  ChangeWalletNameScreen: {
    title: 'Change wallet name',
    walletNameInput: {
      label: 'Wallet name',
      errors: walletNameErrors,
    },
    changeButton: 'Change name',
  },
  ReceiveScreen: {
    title: 'Receive',
    infoText:
      'Share this address to receive payments. ' +
      'To protect your privacy, new addresses are ' +
      'generated automatically once you use them.',
    generateButton: 'Generate another address',
    cannotGenerate: 'You have to use some of your addresses',
    freshAddresses: 'Fresh addresses',
    usedAddresses: 'Used addresses',
  },
  AddressDetailsModal: {
    walletAddress: 'Your wallet address',
    BIP32path: 'BIP32 path:',
    copyLabel: 'Copy address',
    copiedLabel: 'Copied',
  },
  MnemonicShowScreen: {
    title: 'Recovery phrase',
    mnemonicNote:
      'Please, make sure you have carefully written down your ' +
      'recovery phrase somewhere safe. ' +
      'You will need this phrase to use and restore your wallet. ' +
      'Phrase is case sensitive.',
    confirmationButton: 'Yes, I have written it down',
  },
  MnemonicBackupImportanceModal: {
    title: 'Recovery phrase',
    keysStorageCheckbox:
      'I understand that my secret keys are held securely ' +
      'on this device only, not on the company`s servers',
    newDeviceRecoveryCheckbox:
      'I understand that if this application is moved to another device ' +
      'or delete, my money can be only recovered with the backup phrase that ' +
      'I have written down and saved in secure place.',
    confirmationButton: 'I understand',
  },
  MnemonicCheckScreen: {
    title: 'Recovery phrase',
    instructions:
      'Tap each word in the correct order to verify your recovery phrase',
    mnemonicWordsInput: {
      label: 'Recovery phrase',
      errors: {
        invalidPhrase: 'Recovery phrase does not match',
      },
    },
    clearButton: 'Clear',
    confirmButton: 'Confirm',
  },
  RestoreWalletScreen: {
    title: 'Restore wallet',
    instructions:
      'To restore your wallet please provide the recovery phrase you ' +
      'received when you created your wallet for the first time.',
    mnemonicInput: {
      label: 'Recovery phrase',
      errors: {
        TOO_LONG: 'Phrase is too long. ',
        TOO_SHORT: 'Phrase is too short. ',
        INVALID_CHECKSUM: 'Please enter valid mnemonic.',
        UNKNOWN_WORDS: (words: Array<string>) => {
          const wordlist = words.map((word) => `'${word}'`).join(', ')
          const areInvalid = `${pluralizeEn(words.length, 'is', 'are')} invalid`
          return `${wordlist} ${areInvalid}`
        },
      },
    },
    restoreButton: 'Restore wallet',
  },
  SettingsScreen: {
    WalletTab: {
      title: 'Settings',
      tabTitle: 'Wallet',

      switchWallet: 'Switch wallet',
      logout: 'Logout',

      walletName: 'Wallet name',

      security: 'Security',
      changePassword: 'Change password',
      easyConfirmation: 'Easy transaction confirmation',

      removeWallet: 'Remove wallet',
    },
    ApplicationTab: {
      title: 'Settings',
      tabTitle: 'Application',

      language: 'Your language',

      security: 'Security',
      changePin: 'Change PIN',
      biometricsSignIn: 'Sign in with your biometrics',

      crashReporting: 'Crash reporting',
      crashReportingText:
        'Send crash reports to Emurgo. ' +
        'Changes to this option will be reflected ' +
        ' after restarting the application.',

      termsOfUse: 'Terms of Use',
      support: 'Support',
    },
  },
  SupportScreen: {
    title: 'Support',
    faq: {
      label: 'See frequently asked questions',
      description:
        'If you are experiencing issues, please see the FAQ ' +
        'on Yoroi website for quidance on known issues.',
      url: 'https://yoroi-wallet.com/faq/',
    },
    report: {
      label: 'Report a problem',
      description:
        'If the FAQ does not solve the issue you are ' +
        'experiencing, please use our Support request feature.',
      url: 'https://yoroi-wallet.com/support/',
    },
  },
  TermsOfServiceScreen: {
    title: 'Terms of Service Agreement',
    content: termsOfService,
    aggreeClause: 'I agree with terms of service',
    continueButton: 'Accept',
    savingConsentModalTitle: 'Initializing',
    pleaseWait: common.pleaseWait,
  },
  WalletSelectionScreen: {
    header: 'Your wallets',
    addWalletButton: 'Add wallet',
  },
  BiometricsLinkScreen: {
    enableFingerprintsMessage:
      'Enable use of fingerprints in device settings first!',
    notNowButton: 'Not now',
    linkButton: 'Link',
    headings: ['Use your fingerprint'],
    subHeadings: ['for faster, easier access', 'to your Yoroi wallet'],
  },
  // TODO(ppershing): this localization is a mess
  BiometricsAuthScreen: {
    authorizeOperation: 'Authorize operation',
    useFallbackButton: 'Use fallback',
    headings: ['Authorize with your', 'fingerprint'],
    cancelButton: 'Cancel',
    errors: {
      NOT_RECOGNIZED: 'Fingerprint was not recognized try again',
      SENSOR_LOCKOUT: 'You used too many fingers sensor is disabled',
      SENSOR_LOCKOUT_PERMANENT:
        'You permanently locked out your fingerprint sensor. Use fallback.',
      DECRYPTION_FAILED: 'Fingerprint sensor failed please use fallback',
      UNKNOWN_ERROR: 'Unknown error',
    },
  },
  RemoveWalletScreen: {
    title: 'Remove wallet',
    description: {
      paragraph1:
        'If you really wish to permanently delete the wallet ' +
        'make sure you have written down the mnemonic.',
      paragraph2: 'To confirm this operation type the wallet name below.',
    },
    walletName: 'Wallet name',
    walletNameInput: 'Wallet name',
    remove: 'Remove wallet',
    hasWrittenDownMnemonic:
      'I have written down mnemonic of this wallet and understand ' +
      'that I cannot recover the wallet without it.',
  },

  ChoosePinScreen: {
    title: 'Set PIN',
    PinRegistrationForm: {
      PinInput: {
        title: 'Enter the PIN',
        subtitle: 'Choose new PIN for quick access to wallet.',
      },
      PinConfirmationInput: {
        title: 'Repeat PIN',
      },
    },
  },
  ChangePasswordScreen: {
    title: 'Change wallet password',
    oldPasswordInput: {
      label: 'Current password',
    },
    newPasswordInput: {
      label: 'New password',
    },
    repeatPasswordInput: {
      label: 'Repeat new password',
      errors: {
        passwordsDoNotMatch: 'Passwords do not match',
      },
    },
    continueButton: 'Change password',
  },
  ChangeCustomPinScreen: {
    title: 'Change PIN',
    CurrentPinInput: {
      title: 'Enter PIN',
      subtitle: 'Enter your current PIN',
    },
    PinRegistrationForm: {
      PinInput: {
        title: 'Enter PIN',
        subtitle: 'Choose new PIN for quick access to wallet.',
      },
      PinConfirmationInput: {
        title: 'Repeat PIN',
      },
    },
  },
  EasyConfirmationScreen: {
    title: 'Easy confirmation',
    enable: {
      heading:
        'This option will allow you to send ADA transactions ' +
        'from your wallet just by confirming with fingerprint or ' +
        'face recognition with standard system fallback option. ' +
        'This makes your wallet less secure. This is a compromise ' +
        'between UX and security!',
      warning:
        'Please remember your master password, as you may need it ' +
        'in case your biometrics data are removed from the device.',
      masterPassword: 'Master password',
      enableButton: 'Enable',
    },
    disable: {
      heading:
        'By disabling this option you will be able to spend your ADA ' +
        'only with master password.',
      disableButton: 'Disable',
    },
  },
  Biometry: {
    approveTransaction: 'Authorize with your fingerprint',
    subtitle: '', // subtitle for the biometry dialog Andoid 9
    description: '', // description of the biometry dialog Android 9
    cancelButton: 'Cancel',
  },
}

export default l10n
