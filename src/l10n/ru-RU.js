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
  russian: 'Русский',
}

const datetime = {
  today: 'Сегодня',
  yesterday: 'Вчера',
}

const walletNameErrors = {
  tooLong: 'Имя кошелька не должно быть длиннее 40 символов ',
  nameAlreadyTaken: 'Это имя уже занято',
}

// common translations shared across multiple places
const common = {
  ok: 'ОК',
  availableFunds: 'Доступные средства',
  pleaseWait: 'пожалуйста, подождите ...',
}

// ios system translations
const ios = {
  NSFaceIDUsageDescription:
    'Активация Face ID позволяет Вам быстро и безопасно получить доступ к Вашему аккаунту.',
  NSCameraUsageDescription: 'Активация камеры позволяет Вам сканирововать QR коды.',
}

const l10n = {
  global: {
    languages,
    datetime,
    ios,
    notifications: {
      offline: 'Вы не подключены к сети. Пожалуйста, проверьте настройки на Вашем устройстве.',
    },
    currentLanguageName: 'Русский',
  },
  confirmationDialogs: {
    logout: {
      title: 'Выйти',
      message: 'Вы действительно хотите завершить сеанс?',
      yesButton: 'Да',
      noButton: 'Нет',
    },
  },
  errorDialogs: {
    generalError: (message: string) => ({
      title: 'Непредвиденная ошибка',
      message: `Не удалось выполнить запрошенную операцию. Это все, что нам известно: ${message}`,
      yesButton: common.ok,
    }),
    pinMismatch: {
      title: 'Неверный PIN',
      message: 'PIN-коды не совпадают.',
      yesButton: common.ok,
    },
    incorrectPin: {
      title: 'Неверный PIN',
      message: 'Введен неверный PIN-код.',
      yesButton: common.ok,
    },
    incorrectPassword: {
      title: 'Неверный пароль',
      message: 'Вы ввели неверный пароль.',
      yesButton: common.ok,
    },
    biometricsIsTurnedOff: {
      title: 'Биометрия была выключена',
      message: 'Кажется, что Вы отключили биометрию, пожалуйста, включите её',
      yesButton: common.ok,
    },
    walletKeysInvalidated: {
      title: 'Биометрия изменена',
      message:
        'Мы обнаружили, что биометрия в Вашем телефоне изменилась. ' +
        'В результате чего упрощенное подтверждение транзакции было отключено ' +
        'и отправка транзакции допускается только с мастер-паролем. ' +
        'Вы можете заново подключить упрощенное подтверждение транзакций в настройках ',
      yesButton: 'ОК',
    },
    networkError: {
      title: 'Ошибка сети',
      message:
        'Ошибка при подключении к серверу. ' +
        'Пожалуйста, проверьте Ваше подключение к Интернету',
      yesButton: common.ok,
    },
    disableEasyConfirmationFirst: {
      title: 'Действие не удалось',
      message:
        'Пожалуйста, сначала отключите функию упрощенного подтверждения транзакции во всех ' +
        'Ваших кошельках',
      yesButton: common.ok,
    },
    enableFingerprintsFirst: {
      title: 'Действие не удалось',
      message:
        'Вам сначала необходимо включить биометрию на Вашем устройстве, чтобы ' +
        'чтобы иметь возможность соединить её с этим приложением',
      yesButton: 'ОК',
    },
    enableSystemAuthFirst: {
      title: 'Блокировка экрана отключена',
      message:
        'Вы, вероятно, отключили блокировку экрана в Вашем телефоне. Вам необходимо ' +
        'сначала отключить упрощенное подтверждение транзакции. Please set up ' +
        'you lock screen (PIN / Password / Pattern) on your phone ' +
        'and then restart application. После этого действия Вы сможете ' +
        'отключить блокировку экрана ' +
        'на своем телефоне и использовать это приложение',
      yesButton: 'OK',
    },
    wrongPinError: {
      title: 'Неверный PIN',
      message: 'неверный PIN-код.',
      yesButton: 'OK',
    },
  },
  LanguageSelectionScreen: {
    languages,
    continueButton: 'Выбрать язык',
  },
  YoroiDescription: {
    line1: 'Yoroi - это легкий веб-кошелек для Cardano',
    line2: 'Безопасно Быстро Просто',
    byEmurgo: 'От',
  },
  AppStartScreen: {
    loginButton: 'Вход',
  },
  WithPinLoginScreen: {
    title: 'Ввести PIN',
  },
  CreateWalletScreen: {
    title: 'Создать новый кошелек',
  },
  CreateOrRestoreWalletScreen: {
    title: 'Добавить кошелек',
    createWalletButton: 'Создать новый кошелек',
    restoreWalletButton: 'Восстановить кошелек из резервной копии',
  },
  // On CreateWalletScreen
  MnemonicExplanationModal: {
    paragraph1: [
      inline([
        normal(
          'В следующем окне Вы увидите набор 15 случайных слов. ',
        ),
        normal('Это фраза '),
        bold('восстановления Вашего кошелька. '),
        normal('Она может быть введена в любой версии '),
        normal('Yoroi для резервного копирования или восстановления '),
        normal('средств Вашего кошелька и приватного ключа.'),
      ]),
    ],
    paragraph2: [
      inline([
        normal('Убедитесь, что '),
        bold('никто не смотрит на экран Вашего устройства '),
        normal('если только Вы не собираетесь предоставить им доступ к Вашим средствам.'),
      ]),
    ],
    nextButton: 'Я понимаю',
  },
  WalletNameAndPasswordForm: {
    walletNameInput: {
      label: 'Имя кошелька',
      errors: walletNameErrors,
    },
    newPasswordInput: {
      label: 'Пароль кошелька',
    },
    repeatPasswordInput: {
      label: 'Повторите пароль',
      errors: {
        passwordsDoNotMatch: 'Пароли не совпадают',
      },
    },
    continueButton: 'Продолжить',
  },
  PasswordStrengthIndicator: {
    passwordRequirementsNote: 'Пароль должен иметь не менее:',
    passwordMinLength: '7 символов',
    passwordUpperChar: '1 заглавную букву',
    passwordLowerChar: '1 строчную букву',
    passwordNumber: '1 цифру',
    continueButton: 'Продолжить',
    passwordBigLength: '12 символов',
    or: 'Или',
  },
  TransactionHistoryScreeen: {
    syncErrorBanner: {
      textWithoutRefresh: 'Мы испытываем проблемы с синхронизацией.',
      textWithRefresh:
        'Мы испытываем проблемы с синхронизацией. Потяните, чтобы обновить',
    },
    availableFundsBanner: {
      label: common.availableFunds,
    },
    noTransactions: 'Еще нет транзакций для показа',
    transaction: {
      transactionType: {
        SENT: 'отправить ADA',
        RECEIVED: 'получить ADA',
        SELF: 'Intrawallet',
        MULTI: 'Multiparty',
      },
      assuranceLevelHeader: 'Уровень гарантии:',
      assuranceLevel: {
        LOW: 'Низкий',
        MEDIUM: 'Средний',
        HIGH: 'Высокий',
        PENDING: 'В ожидании',
        FAILED: 'Не удалось',
      },
      fee: 'Комиссия:',
    },
    sendButton: 'Отправить',
    receiveButton: 'Получить',
  },
  TransactionDetailsScreen: {
    transactionType: {
      SENT: 'Отправленные средства',
      RECEIVED: 'Полученные средства',
      SELF: 'Intrawallet transaction',
      MULTI: 'Multi-party transaction',
    },
    fee: 'Комиссия: ',
    fromAddresses: 'С адресов',
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
