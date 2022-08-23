interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
// api 함수: fetchContacts()
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  // Promise 타입은 자체적으로 제네릭을 받도록 되어 있음
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
  // 2초 뒤에 데이터가 온다
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
    // fetchContacts()가 넘겨준 Promise<Contact[]>
    // -> Promise가 가지고 온 Contact[]가 반환이 될 것임.
    // 그러므로 response는 Contact[]
  }
  // 기본적으로 fetchData()는 셋업함수

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }
  // 이름을 가지고 전화번호를 찾는 함수
  // 전화번호부 리스트에서 filter -> 이름이 같은지
  // filter -> 여러개 요소 반환

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  // phones라는 속성의 타입은 PhoneNumberDictionary
  // PhoneNumberDictionary에는 home, studio, office 세 가지가 올 수 있음

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }
  // name은 string

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  // address는 string
  /* ------------------------------------------------ */
}

let heroes = [
  { name: 'Tony', age: 30 },
  { name: 'Captain', age: 100 },
];
heroes.map(function (hero) {
  return hero.name
})

new AddressBook();
