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
      title: '생체인식이 꺼져 있습니다',
      message: 'It seems that you turned off biometrics, please turn it on',
      yesButton: common.ok,
    },
    walletKeysInvalidated: {
      title: 'Biometrics changed',
      message:
        'We detected that your biometrics in phone changed. ' +
        'As a result the easy transaction confirmation was disabled ' +
        'and transaction submitting is allowed only with master password. ' +
        'You can re-enable easy transactions confirmation in settings',
      yesButton: 'OK',
    },
    networkError: {
      title: 'Network error',
      message:
        'Error connecting to the server. ' +
        'Please check your internet connection',
      yesButton: common.ok,
    },
    disableEasyConfirmationFirst: {
      title: 'Action failed',
      message:
        'Please disable easy confirmation function in all ' +
        'your wallets first',
      yesButton: common.ok,
    },
    enableFingerprintsFirst: {
      title: 'Action failed',
      message:
        'You need to enable biometrics in your device first in order ' +
        'to be able link it with this app',
      yesButton: 'OK',
    },
    enableSystemAuthFirst: {
      title: 'Lock screen disabled',
      message:
        'You probably disabled lock screen in your phone. You need to ' +
        'disable easy transaction confirmation first. Please set up ' +
        'you lock screen (PIN / Password / Pattern) on your phone ' +
        'and then restart application. After this action you should be ' +
        'able to disable lock screen ' +
        'on your phone and use this application',
      yesButton: 'OK',
    },
    wrongPinError: {
      title: 'Invalid PIN',
      message: 'PIN is incorrect.',
      yesButton: 'OK',
    },
  },
  LanguageSelectionScreen: {
    languages,
    continueButton: 'Choose language',
  },
  YoroiDescription: {
    line1: 'Yoroi is Web Light Wallet for Cardano',
    line2: 'Secure Fast Simple',
    byEmurgo: 'By',
  },
  AppStartScreen: {
    loginButton: 'Login',
  },
  WithPinLoginScreen: {
    title: 'Enter PIN',
  },
  CreateWalletScreen: {
    title: 'Create a new wallet',
  },
  CreateOrRestoreWalletScreen: {
    title: 'Add wallet',
    createWalletButton: 'Create new wallet',
    restoreWalletButton: 'Restore wallet from backup',
  },
  // On CreateWalletScreen
  MnemonicExplanationModal: {
    paragraph1: [
      inline([
        normal(
          'On the following screen, you will see a set of 15 random words. ',
        ),
        normal('This is your '),
        bold('wallet recovery phrase. '),
        normal('It can be entered in any version '),
        normal('of Yoroi in order to back up or restore '),
        normal('your wallet`s funds and private key.'),
      ]),
    ],
    paragraph2: [
      inline([
        normal('Make sure '),
        bold('nobody looks into your screen '),
        normal('unless you want them to have access to your funds.'),
      ]),
    ],
    nextButton: 'I understand',
  },
  WalletNameAndPasswordForm: {
    walletNameInput: {
      label: 'Wallet name',
      errors: walletNameErrors,
    },
    newPasswordInput: {
      label: 'Wallet password',
    },
    repeatPasswordInput: {
      label: 'Repeat password',
      errors: {
        passwordsDoNotMatch: 'Passwords do not match',
      },
    },
    continueButton: 'Continue',
  },
  PasswordStrengthIndicator: {
    passwordRequirementsNote: 'The password needs to contain at least:',
    passwordMinLength: '7 characters',
    passwordUpperChar: '1 uppercase letter',
    passwordLowerChar: '1 lowercase letter',
    passwordNumber: '1 number',
    continueButton: 'Continue',
    passwordBigLength: '12 characters',
    or: 'Or',
  },
  TransactionHistoryScreeen: {
    syncErrorBanner: {
      textWithoutRefresh: 'We are experiencing synchronization issues.',
      textWithRefresh:
        'We are experiencing synchronization issues. Pull to refresh',
    },
    availableFundsBanner: {
      label: common.availableFunds,
    },
    noTransactions: 'No transactions to show yet',
    transaction: {
      transactionType: {
        SENT: 'ADA sent',
        RECEIVED: 'ADA received',
        SELF: 'Intrawallet',
        MULTI: 'Multiparty',
      },
      assuranceLevelHeader: 'Assurance level:',
      assuranceLevel: {
        LOW: 'Low',
        MEDIUM: 'Medium',
        HIGH: 'High',
        PENDING: 'Pending',
        FAILED: 'Failed',
      },
      fee: 'Fee:',
    },
    sendButton: 'Send',
    receiveButton: 'Receive',
  },
  TransactionDetailsScreen: {
    transactionType: {
      SENT: 'Sent funds',
      RECEIVED: 'Received funds',
      SELF: 'Intrawallet transaction',
      MULTI: 'Multi-party transaction',
    },
    fee: 'Fee: ',
    fromAddresses: 'From Addresses',
    toAddresses: 'To Addresses',
    transactionId: 'Transaction ID',
    txAssuranceLevel: 'Transaction assurance level',
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
