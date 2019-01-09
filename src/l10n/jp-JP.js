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
  today: '今日',
  yesterday: '昨日',
} 


const walletNameErrors = {
  tooLong: 'ウォレット名が40文字を超えています。',
  nameAlreadyTaken: 'この名前は使用できません。',
}

// common translations shared across multiple places
const common = {
  ok: 'OK',
  availableFunds: '利用可能な資金',
  pleaseWait: 'お待ちください....',
}

// ios system translations
const ios = {
  NSFaceIDUsageDescription:
    'FaceIDを使って、安全・簡単に口座にアクセスすることができます。',
  NSCameraUsageDescription: 'カメラを使って、QRコードを読み取ることができます。.',
}

const l10n = {
  global: {
    languages,
    datetime,
    ios,
    notifications: {
      offline: 'オフラインになっています。 デバイスの設定を確認してください。.',
 
    },
    currentLanguageName: '英語',
  },
  confirmationDialogs: {
    logout: {
      title: 'ログアウト',
      message: '本当にログアウトしてもいいですか?',
      yesButton: 'はい',
      noButton: 'いいえ',
    },
  },
  errorDialogs: {
    generalError: (message: string) => ({
      title: '予期せぬエラーが起こりました。',
      message: `要求された操作を行うことができません。 エラー内容: ${message}`,
      yesButton: common.ok,
    }),
    pinMismatch: {
      title: 'PINが無効です',
      message: 'PINが間違っています。.',
      yesButton: common.ok,
    },
    incorrectPin: {
      title: 'PINが無効です。',
      メッセージ:「入力した PIN が正しくありません 。'、
      yesButton: common.ok,
    },
    incorrectPassword: {
      title: 'パスワードが間違っています。',
      メッセージ:「入力したパスワードが間違っています 。'、
      yesButton: common.ok,
    },
    biometricsIsTurnedOff: {
      生体認証機能が無効になっています。
      生体認証機能が無効になっています。生体認証を有効に設定してください。
      yesButton: common.ok,
    },
    walletKeysInvalidated: {
      title: '生体認証が変更されました。',
      message:
        ' 端末で生体認証の変更が検出されました。 ' +
        'これにより簡易トランザクション承認が無効になりました。' +
        'トランザクションはマスターパスワードによってのみ承認されます。.
 ' +
        '設定で'簡易トランザクション承認を有効にできます。,
      yesButton: 'OK',
    },
    networkError: {
      title: 'ネットワークエラー',
      message:
        'サーバーに接続できません. ' +
        'インターネットの接続を確認してください。',
      yesButton: common.ok,
    },
    disableEasyConfirmationFirst: {
      title: 'アクションが失敗しました。',
      message:
        'すべてのウォレットの簡易トランザクション承認を ' +
        '無効にしてください。',
      yesButton: common.ok,
    },
    enableFingerprintsFirst: {
      title: 'アクションが失敗しました。',
      message:
        ' このアプリとリンクさせるために ' +
        'デバイスの生体認証を有効にしてください。',
      yesButton: 'OK',
    },
    enableSystemAuthFirst: {
      title: 'ロック画面が無効です。',
      message:
        'スマートフォンのロック画面を無効に設定していませんか？ あらかじめ' +
        '簡易トランザクション承認を無効に設定する必要があります。 　
        'スマートフォンのロック画面を設定し（PIN、パスワード、パターン）、' +
        'デバイスを再起動してください。 その後にロック画面を無効に設定し ' +
        '本アプリをご利用いただけます。 ' +
        　
      yesButton: 'OK',
    },
    wrongPinError: {
      title: 'PINが無効です。',
      メッセージ: 'PIN が正しくありません 。'、
      yesButton: 'OK',
    },
  },
  LanguageSelectionScreen: {
    languages,
    continueButton: '言語を選んでください。',
  },
  YoroiDescription: {
    line1: 'ヨロイは、Cardanoのためのライトウォレットです。',
    line2: '安全で、はやくて、シンプル',
    byEmurgo: 'By',
  },
  AppStartScreen: {
    loginButton: 'ログイン',
  },
  WithPinLoginScreen: {
    title: 'PINを入れてください。',
  },
  CreateWalletScreen: {
    title: '新しいウォレットを作成してください。',
  },
  CreateOrRestoreWalletScreen: {
    title: 'ウォレットを追加してください。',
    createWalletButton: '新しいウォレットを作成',
    restoreWalletButton: 'バックアップからウォレットを復元する',
  },
  // On CreateWalletScreen
  MnemonicExplanationModal: {
    paragraph1: [
      inline([
        normal(
          '次の画面で、任意の15個の言葉が表示されます。. ', ',
        ),
        normal('これはあなたの '),
        bold('ウォレットの復元フレーズです。 '),
        normal('これは、ヨロイのどのバージョンでも'),
        normal('入力してあなたのウォレットとプライベートキーを'),
        normal('バックアップ、復元できます。'),
      ]),
    ],
    paragraph2: [
      inline([
        normal('他の人に '),
        bold('アクセス権が渡らないように、 '),
        normal('誰も画面をのぞいていないことを確認してください。'),
      ]),
    ],
    nextButton: '了解',
  },
  WalletNameAndPasswordForm: {
    walletNameInput: {
      label: 'Wallet名',
      errors: walletNameErrors,
    },
    newPasswordInput: {
      label: 'ウォレットのパスワード',
    },
    repeatPasswordInput: {
      label: 'パスワードをもう一度入力してください。',
      errors: {
        passwordsDoNotMatch: 'パスワードが間違っています。',
      },
    },
    continueButton: '続行',
  },
  PasswordStrengthIndicator: {
    passwordRequirementsNote: パスワードは、:',
    passwordMinLength: '大小1文字以上ずつの英語＋',
    passwordUpperChar: '任意の一つ以上の数字からなる、',
    passwordLowerChar: '7~12文字で構成してください。,

     
     continueButton: '続行',
     
    or: 'または',
  },
  TransactionHistoryScreeen: {
    syncErrorBanner: {
      textWithoutRefresh: '同期エラーが発生しています。',
      textWithRefresh:
        '同期エラーが発生しています。. 再読み込みしてください',
    },
    availableFundsBanner: {
      label: common.availableFunds,
    },
    noTransactions: 'トランザクションがありません。',
    transaction: {
      transactionType: {
        SENT: 'ADAが送信されました。',
        RECEIVED: 'ADAを受信しました。',
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
