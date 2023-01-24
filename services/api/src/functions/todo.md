| Type | Method | Name |
|---|---|---|
| `expo-create` | Create a new expo | |
| `expo-get` | Get a single expo | |
| `expo-list` | Get all expositions of this user | |
| `expo-delete` | Delete this expo | |
| `form-create` | Create a form | expoId, name |
| `form-list` | list all expo forms | expoId |
| `form-get` | get a single form | expoId, formId |
| `submission-create` | Create a new submission | { email: string, body: string, expoId: uuid, type: 'check-in' | 'check-out' | uuid->entity::Form} |
| `submission-list` | Get all submissions of this expo | { expo: uuid->entity::Expo, parent: 'check-in' | 'check-out' | uuid->entity:å:Form} |
