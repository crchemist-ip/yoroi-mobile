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
    toAddresses: 'На адреса',
    transactionId: 'ID транзакции',
    txAssuranceLevel: 'Уровень гарантии транзакции',
    formatConfirmations: (cnt: number) =>
      `${cnt} ${pluralizeEn(cnt, 'ПОДТВЕРЖДЕНИЕ', 'ПОДТВЕРЖДЕНИЯ')}`,
    formatOmittedCount: (cnt: number) => `+ ${cnt} omitted`,
    addressPrefix: {
      receive: (idx: number) => `/${idx}`,
      change: (idx: number) => '/change',
      notMine: 'not mine',
    },
  },
  SendAdaScreen: {
    title: 'Отправить',
    fee: {
      label: 'Комиссия',
      notAvailable: '-',
    },
    balanceAfter: {
      label: 'Баланс после',
      notAvailable: '-',
    },
    availableFundsBanner: {
      label: common.availableFunds,
      isFetching: 'Проверка баланса...',
      notAvailable: '-',
    },
    addressInput: {
      label: 'Адрес',
      errors: {
        invalidAddress: 'Пожалуйста, введите действительный адрес',
      },
    },
    amountInput: {
      label: 'Сумма',
      errors: {
        invalidAmount: {
          // Note(ppershing): first two should be auto-corrected
          // by the input control
          INVALID_AMOUNT: 'Пожалуйста, введите правильную сумму',
          TOO_MANY_DECIMAL_PLACES: 'Пожалуйста, введите правильную сумму',

          TOO_LARGE: 'Слишком большая сумма',
          NEGATIVE: 'Сумма должна быть положительной',
        },
        insufficientBalance: 'Недостаточно средств для проведения этой транзакции',
      },
    },
    continueButton: 'Продолжить',
    errorBanners: {
      // note: offline banner is shared with TransactionHistory
      networkError:
        'У нас возникли проблемы с получением текущего баланса. ' +
        'Нажмите, чтобы повторить.',
      pendingOutgoingTransaction:
        'Вы не можете отправить новую транзакцию пока ' +
        'текущая еще не завершена',
    },
  },
  ReadQRCodeAddressScreen: {
    title: 'Сканировать QR-код адреса',
  },
  ConfirmSendAdaScreen: {
    title: 'Отправить',
    amount: 'Сумма',
    availableFundsBanner: {
      label: common.availableFunds,
    },
    balanceAfterTx: 'Баланс после транзакции',
    fees: 'Комиссия',
    password: 'Пароль кошелька',
    receiver: 'Получатель',
    confirmButton: 'Подтвердить',
    sendingModalTitle: 'Отправка транзакции',
    pleaseWait: common.pleaseWait,
  },
  WalletCredentialsScreen: {
    title: 'Учетные данные кошелька',
  },
  ChangeWalletNameScreen: {
    title: 'Изменить имя кошелька',
    walletNameInput: {
      label: 'Имя кошелька',
      errors: walletNameErrors,
    },
    changeButton: 'Изменить имя',
  },
  ReceiveScreen: {
    title: 'Получить',
    infoText:
      'Поделитесь этим адресом для получения платежей. ' +
      'Для защиты Вашей конфиденциальности, новые адреса ' +
      'генерируются автоматически после, как Вы ими воспользовались.',
    generateButton: 'Сгенерировать другой адрес',
    cannotGenerate: 'Вы должны использовать некоторые из ваших адресов',
    freshAddresses: 'Новые адреса',
    usedAddresses: 'Использованные адреса',
  },
  AddressDetailsModal: {
    walletAddress: 'Адрес Вашего кошелька',
    BIP32path: 'путь BIP32:',
    copyLabel: 'Cкопировать адрес ',
    copiedLabel: 'Скопировано',
  },
  MnemonicShowScreen: {
    title: 'Восстановительная фраза',
    mnemonicNote:
      'Пожалуйста, убедитесь, что Вы внимательно записали ' +
      'восстановительную фразу в безопасном месте. ' +
      'Вам будет нужна эта фраза для использования и восстановления Вашего кошелька. ' +
      'Фраза чувствительна к регистру.',
    confirmationButton: 'Да, я записал фразу',
  },
  MnemonicBackupImportanceModal: {
    title: 'Восстановительная фраза',
    keysStorageCheckbox:
      'Я понимаю, что мои секретные ключи безопасным образом хранятся ' +
      'только на данном устройстве, а не на серверах компании',
    newDeviceRecoveryCheckbox:
      'Я понимаю, что если данное приложение будет перемещено на другое устройство ' +
      'или удалено, мои средства могут быть восстановлены только с помощью фразы восстановления, которую ' +
      'я записал и сохранил в безопасном месте.',
    confirmationButton: 'Я понимаю',
  },
  MnemonicCheckScreen: {
    title: 'Восстановительная фраза',
    instructions:
      'Tap each word in the correct order to verify your recovery phrase',
    mnemonicWordsInput: {
      label: 'Восстановительная фраза',
      errors: {
        invalidPhrase: 'Восстановительная фраза не совпадает',
      },
    },
    clearButton: 'Очистить',
    confirmButton: 'Подтвердить',
  },
  RestoreWalletScreen: {
    title: 'Восстановить кошелек',
    instructions:
      'Чтобы восстановить Ваш кошелек, пожалуйста, предоставьте восстановительную фразу, которую ' +
      'Вы получили, когда создали свой кошелек в первый раз.',
    mnemonicInput: {
      label: 'Восстановительная фраза',
      errors: {
        TOO_LONG: 'Фраза слишком длинная. ',
        TOO_SHORT: 'Фраза слишком короткая. ',
        INVALID_CHECKSUM: 'Пожалуйста, введите верную мнемоническую фразу.',
        UNKNOWN_WORDS: (words: Array<string>) => {
          const wordlist = words.map((word) => `'${word}'`).join(', ')
          const areInvalid = `${pluralizeEn(words.length, 'is', 'are')} invalid`
          return `${wordlist} ${areInvalid}`
        },
      },
    },
    restoreButton: 'Восстановить кошелек',
  },
  SettingsScreen: {
    WalletTab: {
      title: 'Настройки',
      tabTitle: 'Кошелек',

      switchWallet: 'Перейти в другой кошелек',
      logout: 'Выход',

      walletName: 'Имя кошелька,

      security: 'Безопасность',
      changePassword: Изменить пароль',
      easyConfirmation: 'Упрощенное подтверждение транзакции',

      removeWallet: 'Удалить кошелек',
    },
    ApplicationTab: {
      title: 'Настройки',
      tabTitle: 'Приложение',

      language: 'Ваш язык',

      security: 'Безопасность',
      changePin: 'Изменить PIN',
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
