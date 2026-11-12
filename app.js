/* Bang Bang Kitchen — generated from src/ by build.mjs. Edit files in src/, then run `npm run build`. */

/* ===== src/00-i18n.js ===== */
/* Bang Bang Kitchen — translations. English strings are the keys; PL holds Polish.
 * t('Text {n}', {n: 3}) translates; tp(n, 'job') gives a counted noun with correct plural.
 * Add a language: add a dictionary + plural rule and list it in LANGS. */
'use strict';
const LANG_KEY = 'bbk:lang';
const LANGS = [{ id: 'en', label: 'English', short: 'EN', locale: 'en-GB' }, { id: 'pl', label: 'Polski', short: 'PL', locale: 'pl-PL' }];
let LANG = (() => { try { const v = localStorage.getItem(LANG_KEY); return LANGS.some((l) => l.id === v) ? v : 'en'; } catch (e) { return 'en'; } })();
const PL = {};
const PLURALS = {};
function t(s, vars) {
  let out = (LANG === 'pl' && PL[s]) || s;
  if (vars) out = out.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  return out;
}
/** Marks a string for translation without translating it yet (translated later with t()). */
const tk = (s) => s;
function plForm(n) {
  const a = Math.abs(n);
  if (!Number.isInteger(a)) return 1;
  if (a === 1) return 0;
  if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 12 || a % 100 > 14)) return 1;
  return 2;
}
/** "3 jobs" / "3 zlecenia" */
function tp(n, key) {
  const p = PLURALS[key];
  if (!p) return n + ' ' + key;
  if (LANG === 'pl') return n + ' ' + p.pl[plForm(n)];
  return n + ' ' + (n === 1 ? p.en[0] : p.en[1]);
}
function setLang(id) {
  if (!LANGS.some((l) => l.id === id)) return;
  LANG = id;
  try { localStorage.setItem(LANG_KEY, id); } catch (e) {}
  document.documentElement.lang = id === 'pl' ? 'pl' : 'en-GB';
}
document.documentElement.lang = LANG === 'pl' ? 'pl' : 'en-GB';


/* ===== src/00b-pl.js ===== */
/* Polish translations (keys are the English UI strings). Check coverage with: npm run check-i18n */
Object.assign(PLURALS, {
  job: { en: ['job', 'jobs'], pl: ['zlecenie', 'zlecenia', 'zleceń'] },
  item: { en: ['item', 'items'], pl: ['pozycja', 'pozycje', 'pozycji'] },
  problem: { en: ['problem', 'problems'], pl: ['problem', 'problemy', 'problemów'] }
});
Object.assign(PL, {
  // Navigation & general
  'Live': 'Na żywo', 'Production': 'Produkcja', 'Stock': 'Stan', 'Orders': 'Zamówienia', 'Settings': 'Ustawienia',
  'Main': 'Główna nawigacja', 'Skip to content': 'Przejdź do treści', 'Back': 'Wstecz', 'Close': 'Zamknij', 'OK': 'OK',
  'Cancel': 'Anuluj', 'Save': 'Zapisz', 'Save changes': 'Zapisz zmiany', 'Edit': 'Edytuj', 'Delete': 'Usuń', 'Add': 'Dodaj',
  'Undo': 'Cofnij', 'Details': 'Szczegóły', 'Saved': 'Zapisano', 'Sample': 'Przykład', 'hidden': 'ukryte', '(hidden)': '(ukryte)',
  'Switch language to {lang}': 'Zmień język na: {lang}', 'Language: {lang}': 'Język: {lang}',
  'Type {word} to confirm': 'Wpisz {word}, aby potwierdzić',
  'Unknown location': 'Nieznana lokalizacja', 'Unknown supplier': 'Nieznany dostawca',
  'Could not save: device storage is full or blocked. Export a backup.': 'Nie udało się zapisać: pamięć urządzenia jest pełna lub zablokowana. Wyeksportuj kopię zapasową.',
  // Time
  'Today': 'Dziś', 'Tomorrow': 'Jutro', 'Yesterday': 'Wczoraj', 'h': 'godz.', 'd': 'dn.',
  // Units
  'pcs': 'szt.', 'L': 'L', 'kg': 'kg', 'bags': 'worki', 'portion': 'porcja', 'boxes': 'pudełka', 'tubs': 'pojemniki', 'trays': 'tace', 'packs': 'opak.', 'cases': 'skrzynki',
  // Categories
  'Buns': 'Bułki', 'Oil': 'Olej', 'Containers': 'Pojemniki', 'Production goods': 'Produkty z produkcji', 'Equipment': 'Sprzęt', 'Meat': 'Mięso', 'Other': 'Inne',
  'Internal: sauces, pickles, prep': 'Wewnętrzny: sosy, pikle, przygotowanie',
  // Preset names
  'Production kitchen': 'Kuchnia produkcyjna', 'Central production': 'Produkcja centralna',
  'Regular buns': 'Bułki zwykłe', 'Vegan buns': 'Bułki wegańskie', 'Frozen buns': 'Bułki mrożone', 'Sliced buns': 'Bułki krojone',
  'Gluten-free buns': 'Bułki bezglutenowe', 'Clean oil': 'Czysty olej', 'Containers 2 L': 'Pojemniki 2 L', 'Containers 4 L': 'Pojemniki 4 L',
  'Burger Sauce': 'Sos burgerowy', 'Green Curry Sauce': 'Sos zielone curry', 'House Pickle': 'Pikle domowe', 'Pickled Mustard': 'Pikle musztardowe',
  'Vegan Wellington': 'Wellington wegański', 'Vegan Gravy': 'Sos wegański', 'Meat Gravy': 'Sos mięsny', 'Miso Glaze': 'Polewa miso',
  'Bacon Jam': 'Dżem z bekonu', 'Blue Cheese': 'Ser blue', 'Chilli Sauce': 'Sos chili', 'Mango Heat': 'Mango Heat',
  'Pickled Onion': 'Marynowana cebula', 'Pickled Cabbage': 'Marynowana kapusta', 'Bone Marrow': 'Szpik kostny',
  'Chipotle': 'Chipotle', 'Vegan Sauce': 'Sos wegański (vegan sauce)', 'Brownie': 'Brownie', 'Matcha cheesecake': 'Sernik matcha',
  'Truffle Mayo': 'Majonez truflowy', 'BBQ': 'BBQ', 'Rosemary Salt': 'Sól rozmarynowa',
  'Cauli Cro': 'Cauli Cro', 'Mac Cro': 'Mac Cro', 'Ox Cheeks': 'Policzki wołowe',
  'Sauerkraut': 'Kapusta kiszona', 'Nacho cheese sauce': 'Sos serowy do nachos', 'Cottage cheese / twarog': 'Twaróg',
  'Pulled lamb': 'Szarpana jagnięcina', 'Deep gastro tray with lid': 'Głęboki pojemnik gastro z pokrywą', 'Sieve': 'Sito', 'Tongs': 'Szczypce',
  // Statuses
  'Requested': 'Zgłoszone', 'In progress': 'W trakcie', 'Ready': 'Gotowe', 'Delivered': 'Dostarczone', 'Cancelled': 'Anulowane',
  'Ordered': 'Zamówione', 'On the way': 'W drodze', 'Problem': 'Problem', 'Start': 'Rozpocznij', 'Mark ready': 'Oznacz jako gotowe',
  'Damaged': 'Uszkodzone', 'Short / missing': 'Braki', 'Late': 'Spóźnione', 'Wrong item': 'Zły towar', 'Quality': 'Jakość',
  // Line editor
  'Choose an item…': 'Wybierz pozycję…', 'Custom item…': 'Własna pozycja…', 'Item {n}': 'Pozycja {n}', 'Remove item {n}': 'Usuń pozycję {n}',
  'Custom item name': 'Nazwa własnej pozycji', 'Item name, e.g. Kimchi': 'Nazwa, np. kimchi', 'Quantity': 'Ilość', 'Qty': 'Ilość', 'Unit': 'Jednostka',
  'Items': 'Pozycje', 'Add another item': 'Dodaj kolejną pozycję', 'Type the item name.': 'Wpisz nazwę pozycji.', 'Choose an item.': 'Wybierz pozycję.',
  'Enter a quantity above 0, e.g. 8 or 2.5.': 'Podaj ilość większą od 0, np. 8 albo 2,5.', 'Add at least one item.': 'Dodaj co najmniej jedną pozycję.',
  // Cards
  'Waiting {time}': 'Czeka {time}', 'Open job for {place}': 'Otwórz zlecenie dla: {place}', 'By {name}': 'Zgłasza: {name}',
  'Open order from {supplier}': 'Otwórz zamówienie od: {supplier}', 'Needed {when}': 'Na: {when}', '{time} late': 'spóźnienie {time}', 'Log problem': 'Zgłoś problem',
  // Live
  'Nothing to show yet': 'Na razie nic tu nie ma',
  'Live fills up as you add production jobs, count stock and log orders. Everything stays on this device.': 'Widok na żywo zapełni się, gdy dodasz zlecenia produkcji, policzysz stan i zapiszesz zamówienia. Wszystko zostaje na tym urządzeniu.',
  'Add a production job': 'Dodaj zlecenie produkcji', 'Sauces, pickles, prep for a restaurant': 'Sosy, pikle, przygotowanie dla lokalu',
  'Count stock': 'Policz stan', 'Buns, oil, containers, sauces': 'Bułki, olej, pojemniki, sosy',
  'Log an order or delivery': 'Zapisz zamówienie lub dostawę', 'Bread And Macaroon, Swaledale, Production': 'Bread And Macaroon, Swaledale, produkcja',
  'Tip: open Settings to add this app to your home screen, change the language, or load clearly-labelled sample data to try it out.': 'Wskazówka: w Ustawieniach dodasz aplikację do ekranu głównego, zmienisz język albo wczytasz wyraźnie oznaczone dane przykładowe.',
  'Headline counts': 'Podsumowanie', 'Open production jobs': 'Otwarte zlecenia produkcji', 'Low-stock items': 'Niski stan',
  'Deliveries due today': 'Dostawy na dziś', 'Late or problem': 'Spóźnione lub z problemem', 'In production': 'W produkcji',
  '{a} ready · {b} in progress': 'gotowe: {a} · w trakcie: {b}', 'Nothing on the go': 'Nic nie jest w trakcie',
  'Jobs waiting to start: {n}': 'Zlecenia czekające na start: {n}', 'No production jobs are in progress or ready.': 'Żadne zlecenie nie jest w trakcie ani gotowe.',
  'See requested jobs': 'Pokaż zgłoszone zlecenia', 'New job': 'Nowe zlecenie', 'Requested, not started yet: {n}': 'Zgłoszone, jeszcze nierozpoczęte: {n}',
  'Low stock': 'Niski stan', 'Alert at {n}': 'Alert przy {n}', 'Out': 'Brak', 'Low': 'Mało', 'See all {n}': 'Pokaż wszystkie ({n})',
  'Stock looks fine': 'Stan jest w porządku', 'No counted item is at or below its alert level.': 'Żadna policzona pozycja nie jest na poziomie alertu ani poniżej.',
  'No stock counted yet.': 'Stan nie został jeszcze policzony.', 'Open stock': 'Otwórz stan', 'Deliveries today': 'Dostawy dziś', '{n} delivered': 'dostarczone: {n}',
  'No deliveries due': 'Brak dostaw', 'Nothing due today, late, or with an open problem.': 'Nic na dziś, nic spóźnionego ani z otwartym problemem.',
  'New order': 'Nowe zamówienie', 'Live updates automatically · Last refreshed {time}': 'Odświeża się automatycznie · ostatnio {time}',
  // Production
  'All restaurants': 'Wszystkie lokale', 'No production jobs yet': 'Brak zleceń produkcji',
  'Add a job when a restaurant asks for sauces, pickles, prep or kit. It moves Requested → In progress → Ready → Delivered.': 'Dodaj zlecenie, gdy lokal prosi o sosy, pikle, przygotowanie lub sprzęt. Przechodzi przez etapy: Zgłoszone → W trakcie → Gotowe → Dostarczone.',
  'New production job': 'Nowe zlecenie produkcji', 'Nothing matches': 'Brak wyników', 'No jobs match this status and restaurant.': 'Brak zleceń o tym statusie dla tego lokalu.',
  'Show all open jobs': 'Pokaż wszystkie otwarte', 'Filter by status': 'Filtruj według statusu', 'Restaurant': 'Lokal', 'Edit job': 'Edytuj zlecenie',
  'Choose a restaurant…': 'Wybierz lokal…', 'Requested by': 'Zgłasza', 'e.g. Henrique': 'np. Henrique', 'Notes': 'Notatki',
  'Pack sizes, lids, delivery details…': 'Wielkość opakowań, pokrywy, szczegóły dostawy…', 'Add job': 'Dodaj zlecenie',
  'Choose which restaurant this is for.': 'Wybierz, dla którego lokalu.', 'Add it again?': 'Dodać ponownie?',
  'The same job for {place} was added {time} ago.': 'Takie samo zlecenie dla {place} dodano {time} temu.', 'Add anyway': 'Dodaj mimo to',
  'Job added for {place}': 'Dodano zlecenie dla: {place}', 'Job updated': 'Zlecenie zaktualizowane', 'Requested by {name}': 'Zgłasza: {name}',
  'Added {when}': 'Dodano {when}', 'Set status': 'Ustaw status', 'Job status': 'Status zlecenia', 'History': 'Historia', 'Delete job': 'Usuń zlecenie',
  'Open': 'Otwarte', 'All': 'Wszystkie',
  // Stock
  'Updated {when}': 'Aktualizacja {when}', 'Not counted': 'Nie policzono', 'Set {item} at {place}': 'Ustaw: {item}, {place}', 'Remove {n}': 'Odejmij {n}',
  'set exact amount': 'ustaw dokładną ilość', 'Add {n}': 'Dodaj {n}', 'Count': 'Policz', '{n} low': 'mało: {n}', 'All locations': 'Wszystkie lokalizacje',
  'Low stock only': 'Tylko niski stan', 'Show all items': 'Pokaż wszystkie pozycje', 'Nothing is low': 'Niczego nie brakuje',
  'Every counted item is above its alert level.': 'Każda policzona pozycja jest powyżej poziomu alertu.', 'No stock counted yet': 'Stan nie jest jeszcze policzony',
  'Pick a location above, then tap Count next to an item to record what you have.': 'Wybierz lokalizację powyżej, a potem stuknij Policz przy pozycji, żeby zapisać, ile masz.',
  'Start with {place}': 'Zacznij od: {place}', 'Nothing is low here': 'Tu niczego nie brakuje',
  'No counted item at {place} is at or below its alert level.': 'Żadna policzona pozycja w {place} nie jest na poziomie alertu ani poniżej.',
  'No items in the catalogue': 'Brak pozycji w katalogu', 'Add items in Settings → Items.': 'Dodaj pozycje w Ustawienia → Pozycje.', 'Open Settings': 'Otwórz Ustawienia',
  'Tap Count to record what {place} has. Alert levels are defaults; change them per item.': 'Stuknij Policz, żeby zapisać stan w {place}. Poziomy alertu są domyślne, możesz je zmienić dla każdej pozycji.',
  'Location': 'Lokalizacja', 'Show': 'Pokaż', 'last updated {when}': 'ostatnio {when}', 'not counted yet': 'jeszcze nie policzono',
  'Quantity on hand ({unit})': 'Ilość na stanie ({unit})', 'Low-stock alert at this location ({unit})': 'Alert niskiego stanu w tej lokalizacji ({unit})',
  'Default: {n}': 'Domyślnie: {n}', 'Leave empty to use the item default ({n} {unit}). Alerts show when stock is at or below this level.': 'Zostaw puste, żeby użyć wartości domyślnej ({n} {unit}). Alert pojawia się, gdy stan jest na tym poziomie lub niżej.',
  'Mark as not counted': 'Oznacz jako niepoliczone', 'Enter a number, 0 or more (e.g. 40 or 12.5).': 'Podaj liczbę, 0 lub więcej (np. 40 albo 12,5).',
  'Enter a number, 0 or more, or leave empty.': 'Podaj liczbę, 0 lub więcej, albo zostaw puste.', 'low': 'mało', 'Marked as not counted': 'Oznaczono jako niepoliczone',
  // Orders
  'All suppliers': 'Wszyscy dostawcy', 'No orders yet': 'Brak zamówień',
  'Log what you ordered from Bread And Macaroon, Swaledale or the production kitchen, and when it is needed. Late deliveries show up here and on Live.': 'Zapisz, co zamówiłeś w Bread And Macaroon, Swaledale albo w kuchni produkcyjnej i na kiedy. Spóźnione dostawy pojawią się tutaj i w widoku Na żywo.',
  'No orders match these filters.': 'Żadne zamówienie nie pasuje do filtrów.', 'Clear filters': 'Wyczyść filtry', 'Overdue': 'Po terminie', 'Problems': 'Problemy',
  'No date': 'Bez daty', 'Earlier': 'Wcześniej', 'Delivered & closed': 'Dostarczone i zamknięte', 'Supplier': 'Dostawca', 'Needed-by date': 'Termin',
  'Pick a date…': 'Wybierz datę…', 'Edit order': 'Edytuj zamówienie', 'Choose a supplier…': 'Wybierz dostawcę…', 'Deliver to': 'Dostawa do',
  'Needed by (date)': 'Termin (data)', 'Time': 'Godzina', 'UK time (Europe/London).': 'Czas brytyjski (Europe/London).',
  'Order reference, contact, delivery instructions…': 'Numer zamówienia, kontakt, instrukcje dostawy…', 'Add order': 'Dodaj zamówienie',
  'Choose a supplier.': 'Wybierz dostawcę.', 'Choose where it is delivered.': 'Wybierz miejsce dostawy.', 'Pick a date.': 'Wybierz datę.', 'Pick a time.': 'Wybierz godzinę.',
  'An identical order for the same time already exists.': 'Identyczne zamówienie na tę samą godzinę już istnieje.',
  'Order added · needed {when}': 'Dodano zamówienie · na {when}', 'Order updated': 'Zamówienie zaktualizowane', 'delivered {when}': 'dostarczono {when}',
  'Order status': 'Status zamówienia', 'credit requested': 'poproszono o kredyt', 'Resolved {when}': 'Rozwiązano {when}', 'Resolve': 'Rozwiąż',
  'Logged {when}': 'Zgłoszono {when}', 'No problems logged.': 'Brak zgłoszonych problemów.', 'Log a problem': 'Zgłoś problem',
  'Problem resolved': 'Problem rozwiązany', 'Delete order': 'Usuń zamówienie', 'Add an order first, then log a problem against it.': 'Najpierw dodaj zamówienie, potem zgłoś do niego problem.',
  'Log delivery problem': 'Zgłoś problem z dostawą', 'needed {when}': 'na {when}', 'Which order?': 'Które zamówienie?', 'Choose an order…': 'Wybierz zamówienie…',
  'What went wrong?': 'Co poszło nie tak?', 'e.g. 5 kg chicken bag split, 10.65 kg wings instead of 16.15 kg': 'np. rozdarty 5-kg worek kurczaka, 10,65 kg skrzydełek zamiast 16,15 kg',
  'Credit or refund requested': 'Poproszono o kredyt lub zwrot', 'Choose the order this is about.': 'Wybierz zamówienie, którego to dotyczy.',
  'Choose what went wrong.': 'Wybierz, co poszło nie tak.', 'Problem logged': 'Problem zgłoszony', 'Upcoming': 'Nadchodzące', 'Any date': 'Dowolna data',
  'Next 7 days': 'Najbliższe 7 dni', 'Before today': 'Przed dziś',
  'Cancel this order?': 'Anulować zamówienie?', 'It stays in history as Cancelled.': 'Zostanie w historii jako anulowane.', 'Cancel order': 'Anuluj zamówienie',
  'Delete this order?': 'Usunąć zamówienie?', 'It will be removed completely, including its problems.': 'Zostanie całkowicie usunięte, razem z problemami.', 'Order deleted': 'Zamówienie usunięte',
  'Cancel this job?': 'Anulować zlecenie?', 'Cancel job': 'Anuluj zlecenie', 'Delete this job?': 'Usunąć zlecenie?',
  'It will be removed completely. Use Cancelled to keep it in history.': 'Zostanie całkowicie usunięte. Użyj statusu Anulowane, żeby zachować je w historii.', 'Job deleted': 'Zlecenie usunięte',
  // Chrome badges
  'low-stock items': 'pozycji z niskim stanem', 'late or problem orders': 'zamówień spóźnionych lub z problemem', 'jobs ready': 'gotowych zleceń',
  // Settings
  'Installed: you are using the home-screen app.': 'Zainstalowano: korzystasz z aplikacji z ekranu głównego.', 'Add to Home Screen': 'Dodaj do ekranu głównego',
  'iPhone/iPad: open this page in Safari, tap Share, then “Add to Home Screen”.': 'iPhone/iPad: otwórz tę stronę w Safari, stuknij Udostępnij, a potem „Do ekranu początkowego”.',
  'Android: open the browser menu (⋮) and tap “Install app” or “Add to Home screen”. iPhone: Safari → Share → “Add to Home Screen”.': 'Android: otwórz menu przeglądarki (⋮) i stuknij „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”. iPhone: Safari → Udostępnij → „Do ekranu początkowego”.',
  'Language': 'Język', 'Appearance': 'Wygląd', 'Theme': 'Motyw', 'Dark': 'Ciemny', 'Light': 'Jasny', 'Install on your phone': 'Zainstaluj na telefonie',
  'Locations': 'Lokalizacje', 'Suppliers': 'Dostawcy', 'Contact: {name}': 'Kontakt: {name}',
  'Alert levels are starting defaults. Change them here, or per location from the Stock tab.': 'Poziomy alertu to wartości startowe. Zmień je tutaj albo dla konkretnej lokalizacji w zakładce Stan.',
  'Backup': 'Kopia zapasowa', 'Export backup': 'Eksportuj kopię', 'Import backup': 'Importuj kopię',
  'Data is stored only on this device. Export a backup regularly, and to move to a new phone.': 'Dane są zapisane tylko na tym urządzeniu. Regularnie eksportuj kopię, także przy zmianie telefonu.',
  'Sample data': 'Dane przykładowe',
  'Load a few clearly-labelled SAMPLE jobs, orders and stock counts to try the app. They are marked “Sample” and can be removed in one tap.': 'Wczytaj kilka wyraźnie oznaczonych PRZYKŁADOWYCH zleceń, zamówień i stanów, żeby wypróbować aplikację. Są oznaczone jako „Przykład” i usuniesz je jednym stuknięciem.',
  'Remove sample data': 'Usuń dane przykładowe', 'Load sample data': 'Wczytaj dane przykładowe', 'Danger zone': 'Strefa zagrożenia', 'Clear all data': 'Wyczyść wszystkie dane',
  'About': 'O aplikacji', 'Created by {name}': 'Twórca: {name}', 'Version {v}': 'Wersja {v}', 'Data format v{v}': 'Format danych v{v}',
  '{n} KB stored on this device': '{n} KB na tym urządzeniu', 'Works offline. No accounts, no tracking, nothing is sent anywhere.': 'Działa offline. Bez kont, bez śledzenia, nic nie jest nigdzie wysyłane.',
  'Edit location': 'Edytuj lokalizację', 'Add location': 'Dodaj lokalizację', 'Name': 'Nazwa', 'e.g. Camden': 'np. Camden',
  'Full name or note (optional)': 'Pełna nazwa lub notatka (opcjonalnie)', 'Hide this location (keeps its history)': 'Ukryj lokalizację (historia zostaje)',
  'Enter a name.': 'Wpisz nazwę.', 'A location with this name already exists.': 'Lokalizacja o tej nazwie już istnieje.',
  'Edit supplier': 'Edytuj dostawcę', 'Add supplier': 'Dodaj dostawcę', 'What they supply': 'Co dostarcza', 'e.g. Veg': 'np. warzywa',
  'Contact name': 'Osoba kontaktowa', 'Hide this supplier (keeps its history)': 'Ukryj dostawcę (historia zostaje)', 'A supplier with this name already exists.': 'Dostawca o tej nazwie już istnieje.',
  'Edit item': 'Edytuj pozycję', 'Add item': 'Dodaj pozycję', 'e.g. Kimchi': 'np. kimchi', 'Category': 'Kategoria', 'Default alert level': 'Domyślny poziom alertu',
  '+/− step': 'Krok +/−', 'Hide this item (keeps its history)': 'Ukryj pozycję (historia zostaje)', 'An item with this name already exists.': 'Pozycja o tej nazwie już istnieje.',
  'Enter a number, 0 or more.': 'Podaj liczbę, 0 lub więcej.', 'Enter a number above 0.': 'Podaj liczbę większą od 0.',
  'Backup exported': 'Kopia wyeksportowana', 'That file is too large to be a backup.': 'Ten plik jest za duży jak na kopię zapasową.',
  'That file is not a valid backup.': 'To nie jest prawidłowa kopia zapasowa.', 'That file is not a Bang Bang Kitchen backup.': 'To nie jest kopia zapasowa Bang Bang Kitchen.',
  'This backup is from a newer version of the app. Update the app first.': 'Ta kopia pochodzi z nowszej wersji aplikacji. Najpierw zaktualizuj aplikację.',
  'Replace data with this backup?': 'Zastąpić dane tą kopią?',
  'Everything on this device will be replaced by the backup ({jobs} jobs, {orders} orders).': 'Wszystkie dane na tym urządzeniu zostaną zastąpione kopią (zlecenia: {jobs}, zamówienia: {orders}).',
  'Replace': 'Zastąp', 'Backup imported': 'Kopia zaimportowana', 'Sample data loaded — marked “Sample”': 'Wczytano dane przykładowe, oznaczone jako „Przykład”',
  'Sample data removed': 'Usunięto dane przykładowe', 'Load sample data?': 'Wczytać dane przykładowe?',
  'Adds example jobs, orders and stock counts marked “Sample”. Your own data is kept. Remove them any time.': 'Dodaje przykładowe zlecenia, zamówienia i stany oznaczone jako „Przykład”. Twoje dane zostają. Możesz je usunąć w każdej chwili.',
  'Load sample': 'Wczytaj przykład', 'Clear all data?': 'Wyczyścić wszystkie dane?',
  'Deletes every job, order, stock count and your changes to locations, suppliers and items on this device. Export a backup first if unsure.': 'Usuwa wszystkie zlecenia, zamówienia, stany i twoje zmiany lokalizacji, dostawców i pozycji na tym urządzeniu. Jeśli nie masz pewności, najpierw wyeksportuj kopię.',
  'Clear everything': 'Wyczyść wszystko', 'All data cleared': 'Wszystkie dane wyczyszczone'
});

/* Invoices (v1.2) */
Object.assign(PLURALS, { line: { en: ['line', 'lines'], pl: ['pozycja', 'pozycje', 'pozycji'] } });
Object.assign(PL, {
  'Recent changes': 'Ostatnie zmiany', 'Quick adjust': 'Szybka zmiana', 'Counted': 'Policzono', 'Received from invoice': 'Przyjęto z faktury', 'Undone': 'Cofnięto',
  'Scan invoice': 'Skanuj fakturę', 'Invoices': 'Faktury', 'Invoice': 'Faktura', 'Invoice history': 'Historia faktur', 'Saved invoices': 'Zapisane faktury',
  'Take a photo or upload the invoice. You check every line before anything touches stock.': 'Zrób zdjęcie albo wgraj fakturę. Sprawdzisz każdą pozycję, zanim cokolwiek zmieni się w stanie.',
  'Take photo': 'Zrób zdjęcie', 'Rear camera, invoice flat and well lit': 'Tylny aparat, faktura płasko i w dobrym świetle',
  'Upload photo or PDF': 'Wgraj zdjęcie lub PDF', 'From gallery or files, up to {n} PDF pages': 'Z galerii lub plików, do {n} stron PDF',
  'Type it in by hand': 'Wpisz ręcznie', 'No photo needed': 'Bez zdjęcia',
  'Choose a photo or a PDF file.': 'Wybierz zdjęcie albo plik PDF.', 'That file is too large (over 40 MB).': 'Ten plik jest za duży (ponad 40 MB).',
  'Supplier not set': 'Dostawca nieustawiony', 'Reading…': 'Odczytywanie…', 'Received into {place}': 'Przyjęto do: {place}', 'Not received': 'Nieprzyjęta',
  'Compared {when}': 'Porównano {when}', 'No invoices yet': 'Brak faktur',
  'Scan or type in a delivery invoice to compare it with stock. Nothing is added to stock unless you confirm.': 'Zeskanuj lub wpisz fakturę dostawy, żeby porównać ją ze stanem. Nic nie trafi do stanu bez twojego potwierdzenia.',
  'Photos are kept only on this device and are not included in backups.': 'Zdjęcia są tylko na tym urządzeniu i nie trafiają do kopii zapasowej.',
  'Preparing image…': 'Przygotowuję obraz…', 'Opening PDF…': 'Otwieram PDF…',
  'Loading text reader (first time can take a minute)…': 'Wczytuję czytnik tekstu (za pierwszym razem może to potrwać minutę)…', 'Reading invoice…': 'Odczytuję fakturę…',
  'Custom item (not in stock list)': 'Własna pozycja (spoza listy stanu)', 'Matched {pct}%': 'Dopasowano {pct}%', 'Check the match': 'Sprawdź dopasowanie',
  'In stock list': 'Na liście stanu', 'Custom': 'Własna', 'Not linked to stock. Pick a product or add it to items.': 'Niepowiązana ze stanem. Wybierz produkt albo dodaj go do pozycji.',
  'Read as': 'Odczytano jako', 'Product for line {n}': 'Produkt w pozycji {n}', 'Remove line {n}': 'Usuń pozycję {n}', 'Name on invoice': 'Nazwa na fakturze',
  'Price £ (optional)': 'Cena £ (opcjonalnie)', 'Unit differs from stock ({unit})': 'Inna jednostka niż w stanie ({unit})', 'Add to items': 'Dodaj do pozycji',
  'You can type lines in meanwhile; they are replaced when reading finishes.': 'W międzyczasie możesz wpisywać pozycje; zostaną zastąpione po zakończeniu odczytu.',
  'Could not read this file.': 'Nie udało się odczytać pliku.',
  'Type the lines in by hand below. If you are offline, the text reader must be opened once online first.': 'Wpisz pozycje ręcznie poniżej. Bez internetu czytnik tekstu działa dopiero wtedy, gdy raz został otwarty online.',
  'Low reading confidence ({pct}%).': 'Niska pewność odczytu ({pct}%).', 'No product lines found.': 'Nie znaleziono pozycji z produktami.',
  'Check every line against the paper invoice and fix or add lines.': 'Porównaj każdą pozycję z papierową fakturą, popraw lub dodaj brakujące.',
  'Read {n} lines ({pct}% confidence). Check them against the invoice.': 'Odczytano pozycje: {n} (pewność {pct}%). Sprawdź je z fakturą.',
  'Read {n} lines from the PDF text. Check them against the invoice.': 'Odczytano pozycje z tekstu PDF: {n}. Sprawdź je z fakturą.',
  'Only the first {n} pages were read; {m} more were skipped. Add their lines by hand.': 'Odczytano tylko pierwsze strony ({n}); pominięto kolejne ({m}). Dodaj ich pozycje ręcznie.',
  'Invoice not found': 'Nie znaleziono faktury', 'It may have been deleted.': 'Mogła zostać usunięta.',
  'View page {n} full size': 'Pokaż stronę {n} w pełnym rozmiarze', 'Invoice page {n}': 'Strona faktury {n}', 'Rotate & read again': 'Obróć i odczytaj ponownie',
  'Show recognised text': 'Pokaż odczytany tekst', 'Typed in by hand — no photo.': 'Wpisana ręcznie, bez zdjęcia.', 'No image stored for this invoice.': 'Brak zapisanego obrazu tej faktury.',
  'Delete invoice': 'Usuń fakturę', 'Invoice image': 'Obraz faktury', 'Not sure / other': 'Nie wiem / inny', 'Invoice number': 'Numer faktury', 'Invoice date': 'Data faktury',
  'Compare with stock at': 'Porównaj ze stanem w', 'Lines': 'Pozycje', 'Add line': 'Dodaj pozycję', 'Compare with stock': 'Porównaj ze stanem',
  'Choose a product or type the name.': 'Wybierz produkt albo wpisz nazwę.', 'Price must be a number, e.g. 12.50, or empty.': 'Cena musi być liczbą, np. 12,50, albo pusta.',
  'Add at least one line.': 'Dodaj co najmniej jedną pozycję.', 'Custom — not in stock list': 'Własna, spoza listy stanu',
  'Unit differs: invoice {a}, stock {b}': 'Inna jednostka: faktura {a}, stan {b}', 'Out of stock now': 'Teraz brak', 'Low now (alert at {n})': 'Teraz mało (alert przy {n})',
  'Low somewhere': 'Mało w którejś lokalizacji', 'Stock OK': 'Stan OK', 'OK after receiving': 'OK po przyjęciu', 'Still low after receiving': 'Nadal mało po przyjęciu',
  'Same as on hand': 'Tyle samo co na stanie', '{n} more than on hand': 'o {n} więcej niż na stanie', '{n} less than on hand': 'o {n} mniej niż na stanie',
  'On invoice': 'Na fakturze', 'On hand now': 'Teraz na stanie', 'On hand (all locations)': 'Na stanie (wszystkie lokalizacje)', 'Difference': 'Różnica',
  'After receiving': 'Po przyjęciu', 'out': 'brak', 'Not tracked': 'Nie śledzimy', 'Fix the unit to compare': 'Popraw jednostkę, żeby porównać',
  'Received into {place} stock {when}.': 'Przyjęto do stanu {place} {when}.', 'Receive into stock': 'Przyjmij do stanu',
  'Choose one location above to receive this invoice into its stock.': 'Wybierz powyżej jedną lokalizację, żeby przyjąć fakturę do jej stanu.',
  'No lines can be added to stock: link them to products with matching units first.': 'Żadnej pozycji nie można dodać do stanu: najpierw powiąż je z produktami o tej samej jednostce.',
  'Receive into stock at {place}': 'Przyjmij do stanu: {place}',
  'Optional. Adds the invoice quantities to stock after you confirm. Nothing changes until then.': 'Opcjonalnie. Dodaje ilości z faktury do stanu po potwierdzeniu. Do tego czasu nic się nie zmienia.',
  '{n} linked to stock': 'powiązane ze stanem: {n}', '{n} out of stock': 'brak: {n}', '{n} not counted': 'niepoliczone: {n}', '{n} custom': 'własne: {n}',
  '{n} unit mismatch': 'inna jednostka: {n}', 'Lines changed since this comparison. Compare again.': 'Pozycje zmieniły się od porównania. Porównaj ponownie.',
  'Comparison with stock': 'Porównanie ze stanem', 'Choose one location first.': 'Najpierw wybierz jedną lokalizację.', 'No lines can be added to stock.': 'Żadnej pozycji nie można dodać do stanu.',
  'Receive into {place} stock?': 'Przyjąć do stanu {place}?', '{n} lines skipped (custom or unit differs).': 'Pominięte pozycje: {n} (własne lub inna jednostka).',
  'Add to stock': 'Dodaj do stanu', 'Nothing was added to stock.': 'Nic nie dodano do stanu.', 'Added {n} items to {place} stock': 'Dodano pozycje do stanu {place}: {n}',
  'Undone, except {n} items counted again since.': 'Cofnięto, poza pozycjami policzonymi od tego czasu: {n}.', 'Receiving undone': 'Przyjęcie cofnięte',
  'Delete this invoice?': 'Usunąć fakturę?', 'Stock already received from it stays as it is. The photo is deleted too.': 'Stan już przyjęty z tej faktury zostaje bez zmian. Zdjęcie też zostanie usunięte.',
  'The lines and photo are deleted from this device.': 'Pozycje i zdjęcie zostaną usunięte z tego urządzenia.', 'Invoice deleted': 'Faktura usunięta',
  'Read again?': 'Odczytać ponownie?', 'The image is turned a quarter and read again. Current lines are replaced.': 'Obraz zostanie obrócony o 90° i odczytany ponownie. Obecne pozycje zostaną zastąpione.',
  'Rotate & read': 'Obróć i odczytaj', 'The photo is no longer stored.': 'Zdjęcie nie jest już zapisane.', 'Recognised text': 'Odczytany tekst',
  'Raw text from the reader, for checking. Edit the lines, not this.': 'Surowy tekst z czytnika, do sprawdzenia. Edytuj pozycje, nie ten tekst.',
  'Linked to {item}': 'Powiązano z: {item}', 'Added to items: {item}. Set its alert level in Settings.': 'Dodano do pozycji: {item}. Ustaw poziom alertu w Ustawieniach.',
  '{n} saved on this device': 'zapisane na tym urządzeniu: {n}', 'Invoice photos are not included in backups.': 'Zdjęcia faktur nie trafiają do kopii zapasowej.', 'Line removed': 'Pozycja usunięta'
});


/* ===== src/01-core.js ===== */
/* Bang Bang Kitchen — single-page app. Vanilla JS, no dependencies, no network calls.
 * Data lives in localStorage under STORAGE_KEY with a versioned schema (see migrate()). */
'use strict';

const APP_ID = 'bang-bang-kitchen';
const APP_VERSION = '1.2.1';
const STORAGE_KEY = 'bbk:data';
const SCHEMA_VERSION = 2; // v2 (Nov 2026): adds invoices[] and stockLog[]
const TZ = 'Europe/London';

/* ---------- Preset catalogues (structure only, no operational data) ---------- */
const PRESET_LOCATIONS = [
  { id: 'rse', name: 'RSE', fullName: 'Riverside East' },
  { id: 'watson', name: 'Watson', fullName: 'Watsons General Telegraph' },
  { id: 'ladywell', name: 'Ladywell Tavern', fullName: '' },
  { id: 'btb', name: 'BTB', fullName: 'Between the Bridges' },
  { id: 'winter-market', name: 'SB Winter Market', fullName: '' },
  { id: 'southbank', name: 'Southbank', fullName: '' },
  { id: 'the-dog', name: 'The Dog', fullName: '' },
  { id: 'glasshouse', name: 'The Glasshouse', fullName: '' },
  { id: 'stratford', name: 'Stratford', fullName: '' },
  { id: 'winter-wonderland', name: 'Winter Wonderland', fullName: '' },
  { id: 'production', name: 'Production kitchen', fullName: 'Central production' }
];
const PRESET_SUPPLIERS = [
  { id: 'bread-macaroon', name: 'Bread And Macaroon', category: 'Buns', contact: 'Bittu' },
  { id: 'swaledale', name: 'Swaledale Butchers', category: 'Meat', contact: 'Joe' },
  { id: 'production', name: 'Production kitchen', category: 'Internal: sauces, pickles, prep', contact: '' }
];
const CATEGORIES = ['Buns', 'Oil', 'Containers', 'Production goods', 'Equipment', 'Meat', 'Other'];
const UNITS = ['pcs', 'L', 'kg', 'bags', 'portion', 'boxes', 'tubs', 'trays', 'packs', 'cases'];
// threshold = default low-stock alert level (editable per item and per location); step = +/- amount.
const PRESET_CATALOG = [
  { id: 'bun-regular', name: 'Regular buns', unit: 'pcs', category: 'Buns', threshold: 50, step: 10 },
  { id: 'bun-vegan', name: 'Vegan buns', unit: 'pcs', category: 'Buns', threshold: 15, step: 5 },
  { id: 'bun-frozen', name: 'Frozen buns', unit: 'pcs', category: 'Buns', threshold: 20, step: 10 },
  { id: 'bun-sliced', name: 'Sliced buns', unit: 'pcs', category: 'Buns', threshold: 20, step: 10 },
  { id: 'bun-gf', name: 'Gluten-free buns', unit: 'pcs', category: 'Buns', threshold: 5, step: 1 },
  { id: 'oil-clean', name: 'Clean oil', unit: 'L', category: 'Oil', threshold: 40, step: 20 },
  { id: 'cont-2l', name: 'Containers 2 L', unit: 'pcs', category: 'Containers', threshold: 10, step: 1 },
  { id: 'cont-4l', name: 'Containers 4 L', unit: 'pcs', category: 'Containers', threshold: 10, step: 1 },
  // Production kitchen products from Tom's stock-control sheet (5 Nov 2026), with his minimums. No opening quantities.
  { id: 'vegan-wellington', name: 'Vegan Wellington', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'vegan-gravy', name: 'Vegan Gravy', unit: 'L', category: 'Production goods', threshold: 100, step: 1 },
  { id: 'meat-gravy', name: 'Meat Gravy', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'miso-glaze', name: 'Miso Glaze', unit: 'L', category: 'Production goods', threshold: 14, step: 1 },
  { id: 'bacon-jam', name: 'Bacon Jam', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'blue-cheese', name: 'Blue Cheese', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'house-pickle', name: 'House Pickle', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'chilli-sauce', name: 'Chilli Sauce', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'mango-heat', name: 'Mango Heat', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'pickled-onion', name: 'Pickled Onion', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'pickled-cabbage', name: 'Pickled Cabbage', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'bone-marrow', name: 'Bone Marrow', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'green-curry-sauce', name: 'Green Curry Sauce', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'chipotle', name: 'Chipotle', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'vegan-sauce', name: 'Vegan Sauce', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'burger-sauce', name: 'Burger Sauce', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'brownie', name: 'Brownie', unit: 'portion', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'matcha-cheesecake', name: 'Matcha cheesecake', unit: 'portion', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'truffle-mayo', name: 'Truffle Mayo', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'bbq', name: 'BBQ', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'rosemary-salt', name: 'Rosemary Salt', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'pickled-mustard', name: 'Pickled Mustard', unit: 'L', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'cauli-cro', name: 'Cauli Cro', unit: 'bags', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'mac-cro', name: 'Mac Cro', unit: 'bags', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'ox-cheeks', name: 'Ox Cheeks', unit: 'bags', category: 'Production goods', threshold: 24, step: 1 },
  { id: 'sauerkraut', name: 'Sauerkraut', unit: 'L', category: 'Production goods', threshold: 4, step: 1 },
  { id: 'nacho-cheese', name: 'Nacho cheese sauce', unit: 'L', category: 'Production goods', threshold: 4, step: 1 },
  { id: 'twarog', name: 'Cottage cheese / twarog', unit: 'L', category: 'Production goods', threshold: 2, step: 1 },
  { id: 'pulled-lamb', name: 'Pulled lamb', unit: 'bags', category: 'Production goods', threshold: 2, step: 1 },
  { id: 'gastro-deep', name: 'Deep gastro tray with lid', unit: 'pcs', category: 'Equipment', threshold: 3, step: 1 },
  { id: 'sieve', name: 'Sieve', unit: 'pcs', category: 'Equipment', threshold: 1, step: 1 },
  { id: 'tongs', name: 'Tongs', unit: 'pcs', category: 'Equipment', threshold: 2, step: 1 }
];

const JOB_STATUSES = [
  { id: 'requested', label: 'Requested', cls: 's-requested' },
  { id: 'in_progress', label: 'In progress', cls: 's-progress' },
  { id: 'ready', label: 'Ready', cls: 's-ready' },
  { id: 'delivered', label: 'Delivered', cls: 's-delivered' },
  { id: 'cancelled', label: 'Cancelled', cls: 's-cancelled' }
];
const JOB_OPEN = ['requested', 'in_progress', 'ready'];
const JOB_NEXT = { requested: ['in_progress', 'Start'], in_progress: ['ready', 'Mark ready'], ready: ['delivered', 'Delivered'] };

const ORDER_STATUSES = [
  { id: 'ordered', label: 'Ordered', cls: 's-ordered' },
  { id: 'on_the_way', label: 'On the way', cls: 's-ontheway' },
  { id: 'delivered', label: 'Delivered', cls: 's-delivered' },
  { id: 'problem', label: 'Problem', cls: 's-problem' },
  { id: 'cancelled', label: 'Cancelled', cls: 's-cancelled' }
];
const ORDER_ACTIVE = ['ordered', 'on_the_way'];
const ORDER_NEXT = { ordered: ['on_the_way', 'On the way'], on_the_way: ['delivered', 'Delivered'] };
const PROBLEM_TYPES = [
  { id: 'damaged', label: 'Damaged' }, { id: 'short', label: 'Short / missing' }, { id: 'late', label: 'Late' },
  { id: 'wrong', label: 'Wrong item' }, { id: 'quality', label: 'Quality' }, { id: 'other', label: 'Other' }
];

/* ---------- Utilities ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = (p = 'id') => p + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const nowISO = () => new Date().toISOString();
const pad = (n) => String(n).padStart(2, '0');
const clone = (o) => JSON.parse(JSON.stringify(o));
const slug = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'item';
const norm = (s) => String(s || '').trim().replace(/\s+/g, ' ');
const sameName = (a, b) => norm(a).toLowerCase() === norm(b).toLowerCase();

/** Parse a user-typed quantity. Accepts "1,5". Returns NaN when invalid. */
function parseQty(v) {
  if (v == null) return NaN;
  const s = String(v).trim().replace(',', '.');
  if (!/^\d*\.?\d+$|^\d+\.$/.test(s)) return NaN;
  const n = Math.round(parseFloat(s) * 1000) / 1000;
  return Number.isFinite(n) && n <= 1e6 ? n : NaN;
}
const fmtQty = (n) => (n == null || Number.isNaN(n) ? '—' : (Math.round(n * 1000) / 1000).toLocaleString('en-GB', { maximumFractionDigits: 3 }));

/* ---------- Time (always Europe/London) ---------- */
const partsFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
function londonParts(d) {
  const o = {};
  for (const p of partsFmt.formatToParts(d)) o[p.type] = p.value;
  return { y: +o.year, m: +o.month, d: +o.day, h: +o.hour % 24, mi: +o.minute, s: +o.second };
}
/** YYYY-MM-DD for the London calendar day of a date. */
function dayKey(d = new Date()) { const p = londonParts(new Date(d)); return `${p.y}-${pad(p.m)}-${pad(p.d)}`; }
function timeKey(d) { const p = londonParts(new Date(d)); return `${pad(p.h)}:${pad(p.mi)}`; }
function addDays(key, n) { const [y, m, d] = key.split('-').map(Number); const t = new Date(Date.UTC(y, m - 1, d + n)); return t.toISOString().slice(0, 10); }
/** Convert a London wall-clock date + time into an absolute Date (handles GMT/BST). */
function londonToDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const [h, mi] = (timeStr || '00:00').split(':').map(Number);
  const target = Date.UTC(y, m - 1, d, h, mi);
  let guess = target;
  for (let i = 0; i < 3; i++) {
    const p = londonParts(new Date(guess));
    const diff = Date.UTC(p.y, p.m - 1, p.d, p.h, p.mi) - target;
    if (!diff) break;
    guess -= diff;
  }
  return new Date(guess);
}
const MONTHS = { en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], pl: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'] };
const WEEKDAYS = { en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], pl: ['nd.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'] };
function weekdayOf(key) { const [y, m, d] = key.split('-').map(Number); return WEEKDAYS[LANG][new Date(Date.UTC(y, m - 1, d)).getUTCDay()]; }
function fmtDay(key, withWeekday = true) {
  const [y, m, d] = key.split('-').map(Number);
  const today = dayKey();
  if (key === today) return t('Today');
  if (key === addDays(today, 1)) return t('Tomorrow');
  if (key === addDays(today, -1)) return t('Yesterday');
  const yr = String(y) !== today.slice(0, 4) ? ' ' + y : '';
  return (withWeekday ? weekdayOf(key) + ' ' : '') + d + ' ' + MONTHS[LANG][m - 1] + yr;
}
/** "Today, 14:30" / "Fri 13 Nov, 09:00" / "12 Nov 2025, 08:00" */
function fmtWhen(iso) { if (!iso) return '—'; return fmtDay(dayKey(iso)) + ', ' + timeKey(iso); }
function fmtDuration(ms) {
  const m = Math.max(0, Math.floor(ms / 60000));
  const H = t('h'), D = t('d');
  if (m < 1) return '< 1 min';
  if (m < 60) return m + ' min';
  const h = Math.floor(m / 60);
  if (h < 24) return (h + ' ' + H + ' ' + (m % 60 ? (m % 60) + ' min' : '')).trim();
  const d = Math.floor(h / 24);
  return d + ' ' + D + (h % 24 ? ' ' + (h % 24) + ' ' + H : '');
}

/* ---------- Display names (translate presets the user has not renamed) ---------- */
const presetName = (list, id) => { const p = list.find((x) => x.id === id); return p ? p.name : null; };
const U = (u) => t(u); // unit label
const iname = (it) => (it ? (it.preset && it.name === presetName(PRESET_CATALOG, it.id) ? t(it.name) : it.name) : '');
const catName = (c) => t(c);
function lineName(l) { const it = l.itemId && DB.catalog.find((c) => c.id === l.itemId); return it ? iname(it) : l.name; }


/* ===== src/02-store.js ===== */

/* ---------- Store ---------- */
function freshData() {
  return {
    app: APP_ID, version: SCHEMA_VERSION, createdAt: nowISO(), updatedAt: nowISO(),
    settings: { theme: 'dark' },
    locations: PRESET_LOCATIONS.map((l) => ({ ...l, hidden: false, preset: true })),
    suppliers: PRESET_SUPPLIERS.map((s) => ({ ...s, hidden: false, preset: true })),
    catalog: PRESET_CATALOG.map((c) => ({ ...c, hidden: false, preset: true })),
    stock: {},   // { [locationId]: { [itemId]: { qty, threshold?, updatedAt, sample? } } }
    jobs: [],    // production jobs
    orders: [],  // orders & deliveries
    invoices: [], // scanned / typed invoices (images live in IndexedDB, not here)
    stockLog: []  // stock change history (newest last, capped)
  };
}

/** Bring any stored data up to the current schema without losing user data. */
function migrate(raw) {
  const base = freshData();
  if (!raw || typeof raw !== 'object') return base;
  const d = { ...base, ...raw };
  // Schema steps: v1 → v2 adds invoices and stockLog (filled with [] below). Nothing is removed.
  d.version = SCHEMA_VERSION;
  d.app = APP_ID;
  d.settings = { ...base.settings, ...(raw.settings || {}) };
  for (const key of ['locations', 'suppliers', 'catalog', 'jobs', 'orders', 'invoices', 'stockLog']) if (!Array.isArray(d[key])) d[key] = base[key];
  if (!d.stock || typeof d.stock !== 'object' || Array.isArray(d.stock)) d.stock = {};
  // Add any preset catalogue entries introduced by app updates (never overwrite the user's edits).
  const addMissing = (list, presets) => { for (const p of presets) if (!list.some((x) => x.id === p.id)) list.push({ ...p, hidden: false, preset: true }); };
  if (!raw.presetsSeen || raw.presetsSeen < SCHEMA_VERSION) {
    addMissing(d.locations, PRESET_LOCATIONS); addMissing(d.suppliers, PRESET_SUPPLIERS); addMissing(d.catalog, PRESET_CATALOG);
  }
  d.presetsSeen = SCHEMA_VERSION;
  d.jobs.forEach((j) => { j.items = Array.isArray(j.items) ? j.items : []; j.history = Array.isArray(j.history) ? j.history : []; });
  d.orders.forEach((o) => { o.items = Array.isArray(o.items) ? o.items : []; o.history = Array.isArray(o.history) ? o.history : []; o.problems = Array.isArray(o.problems) ? o.problems : []; });
  return d;
}

let DB = load();
function load() {
  try {
    const txt = localStorage.getItem(STORAGE_KEY);
    if (!txt) return freshData();
    return migrate(JSON.parse(txt));
  } catch (e) {
    console.error('Could not read saved data', e);
    // Keep the unreadable copy so nothing is lost.
    try { const bad = localStorage.getItem(STORAGE_KEY); if (bad) localStorage.setItem(STORAGE_KEY + ':corrupt:' + Date.now(), bad); } catch (_) {}
    return freshData();
  }
}
function save() {
  DB.updatedAt = nowISO();
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(DB)); return true; }
  catch (e) { toast(t('Could not save: device storage is full or blocked. Export a backup.'), { error: true, ms: 6000 }); return false; }
}
/** Mutate data, save and re-render. */
function commit(fn, { render: doRender = true } = {}) { fn(DB); save(); if (doRender) render(); }

/* ---------- Lookups ---------- */
const locById = (id) => DB.locations.find((l) => l.id === id);
const supById = (id) => DB.suppliers.find((s) => s.id === id);
const itemById = (id) => DB.catalog.find((c) => c.id === id);
const lname = (l) => (l ? (l.preset && l.name === presetName(PRESET_LOCATIONS, l.id) ? t(l.name) : l.name) : '');
const sname = (s) => (s ? (s.preset && s.name === presetName(PRESET_SUPPLIERS, s.id) ? t(s.name) : s.name) : '');
const locName = (id) => { const l = locById(id); return l ? lname(l) + (l.hidden ? ' ' + t('(hidden)') : '') : t('Unknown location'); };
const supName = (id) => { const s = supById(id); return s ? sname(s) + (s.hidden ? ' ' + t('(hidden)') : '') : t('Unknown supplier'); };
const visibleLocations = () => DB.locations.filter((l) => !l.hidden);
const visibleSuppliers = () => DB.suppliers.filter((s) => !s.hidden);
const visibleCatalog = () => DB.catalog.filter((c) => !c.hidden);
const jobStatus = (id) => JOB_STATUSES.find((s) => s.id === id) || JOB_STATUSES[0];
const orderStatus = (id) => ORDER_STATUSES.find((s) => s.id === id) || ORDER_STATUSES[0];
const badge = (st, extra = '') => `<span class="badge ${st.cls}">${esc(t(st.label))}${extra}</span>`;
const sampleBadge = (rec) => (rec && rec.sample ? ' <span class="badge s-sample">' + esc(t('Sample')) + '</span>' : '');

function stockEntry(locId, itemId) { return (DB.stock[locId] || {})[itemId]; }
function thresholdFor(locId, itemId) {
  const e = stockEntry(locId, itemId); const it = itemById(itemId);
  if (e && typeof e.threshold === 'number') return e.threshold;
  return it ? it.threshold : 0;
}
function isLow(locId, itemId) { const e = stockEntry(locId, itemId); return !!e && typeof e.qty === 'number' && e.qty <= thresholdFor(locId, itemId); }
function lowStockList() {
  const out = [];
  for (const loc of visibleLocations()) {
    const s = DB.stock[loc.id] || {};
    for (const itemId of Object.keys(s)) {
      const it = itemById(itemId);
      if (it && !it.hidden && isLow(loc.id, itemId)) out.push({ loc, item: it, entry: s[itemId], threshold: thresholdFor(loc.id, itemId) });
    }
  }
  return out.sort((a, b) => (a.entry.qty / (a.threshold || 1)) - (b.entry.qty / (b.threshold || 1)));
}
function countedEntries() { let n = 0; for (const k in DB.stock) n += Object.keys(DB.stock[k] || {}).length; return n; }

function orderDue(o) { return o.neededBy ? new Date(o.neededBy).getTime() : Infinity; }
function isOverdue(o, now = Date.now()) { return ORDER_ACTIVE.includes(o.status) && orderDue(o) < now; }
function openProblems(o) { return (o.problems || []).filter((p) => !p.resolvedAt); }
const itemsSummary = (items) => items.map((i) => `${fmtQty(i.qty)} ${U(i.unit)} ${lineName(i)}`).join(', ');


/* ===== src/03-ui.js ===== */

/* ---------- Icons (inline SVG, stroke style) ---------- */
const ICONS = {
  live: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  production: '<path d="M4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/><path d="M2 10h20M9 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2"/>',
  stock: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  orders: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  back: '<path d="M15 18l-6-6 6-6"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>'
};
const icon = (name, label) => `<svg class="i" viewBox="0 0 24 24" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}>${ICONS[name] || ''}</svg>`;

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg, { action, onAction, error = false, ms = 3200 } = {}) {
  const el = $('#toast');
  el.className = 'show' + (error ? ' error' : '');
  el.innerHTML = `<span>${esc(msg)}</span>` + (action ? `<button type="button">${esc(action)}</button>` : '');
  if (action) $('button', el).onclick = () => { hideToast(); onAction && onAction(); };
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, action ? Math.max(ms, 6000) : ms);
}
function hideToast() { $('#toast').className = ''; }

/* ---------- Bottom sheet ---------- */
let sheetCtx = null;
let lastFocus = null;
function openSheet({ title, body, foot = '', onMount, onClose }) {
  closeSheet(true);
  lastFocus = document.activeElement;
  const root = $('#sheet-root');
  root.innerHTML = `<div class="backdrop" data-act="sheet-close"></div>
    <section class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div class="sheet-head"><h2 id="sheet-title">${esc(title)}</h2>
        <button class="icon-btn" type="button" data-act="sheet-close" aria-label="${esc(t('Close'))}">${icon('close')}</button></div>
      <div class="sheet-body">${body}</div>
      ${foot ? `<div class="sheet-foot">${foot}</div>` : ''}
    </section>`;
  sheetCtx = { onClose };
  document.body.style.overflow = 'hidden';
  const sheet = $('.sheet', root);
  if (onMount) onMount(sheet);
  const first = $('[autofocus]', sheet) || $('.sheet-head button', sheet);
  setTimeout(() => first && first.focus({ preventScroll: true }), 30);
  return sheet;
}
function closeSheet(silent) {
  const root = $('#sheet-root');
  if (!root.innerHTML) return;
  const ctx = sheetCtx; sheetCtx = null;
  root.innerHTML = '';
  document.body.style.overflow = '';
  if (!silent && ctx && ctx.onClose) ctx.onClose();
  if (!silent && lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

/* ---------- Confirm / prompt dialog ---------- */
function confirmDialog({ title, message = '', ok = t('OK'), danger = false, typed = '' }) {
  return new Promise((resolve) => {
    const root = $('#dialog-root');
    root.innerHTML = `<div class="backdrop"></div><div class="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dlg-t">
      <h2 id="dlg-t">${esc(title)}</h2>${message ? `<p>${esc(message)}</p>` : ''}
      ${typed ? `<label class="field"><span>${esc(t('Type {word} to confirm', { word: typed }))}</span><input type="text" id="dlg-typed" autocomplete="off" autocapitalize="characters" spellcheck="false"></label>` : ''}
      <div class="btn-row"><button class="btn" type="button" data-r="0">${esc(t('Cancel'))}</button>
      <button class="btn ${danger ? 'danger solid' : 'primary'}" type="button" data-r="1" ${typed ? 'disabled' : ''}>${esc(ok)}</button></div></div>`;
    const done = (v) => { root.innerHTML = ''; document.removeEventListener('keydown', onKey, true); resolve(v); };
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); done(false); } };
    document.addEventListener('keydown', onKey, true);
    $$('[data-r]', root).forEach((b) => (b.onclick = () => done(b.dataset.r === '1')));
    $('.backdrop', root).onclick = () => done(false);
    const inp = $('#dlg-typed', root);
    if (inp) {
      inp.oninput = () => { $('[data-r="1"]', root).disabled = inp.value.trim().toUpperCase() !== typed; };
      setTimeout(() => inp.focus(), 30);
    } else setTimeout(() => $('[data-r="1"]', root).focus(), 30);
  });
}

/* ---------- Form helpers ---------- */
function opt(value, label, selected) { return `<option value="${esc(value)}"${selected ? ' selected' : ''}>${esc(label)}</option>`; }
function locationOptions(selected, { includeHiddenId } = {}) {
  return DB.locations.filter((l) => !l.hidden || l.id === includeHiddenId).map((l) => opt(l.id, lname(l) + (l.fullName ? ' — ' + t(l.fullName) : '') + (l.hidden ? ' ' + t('(hidden)') : ''), l.id === selected)).join('');
}
function supplierOptions(selected, { includeHiddenId } = {}) {
  return DB.suppliers.filter((s) => !s.hidden || s.id === includeHiddenId).map((s) => opt(s.id, sname(s) + (s.hidden ? ' ' + t('(hidden)') : ''), s.id === selected)).join('');
}
function unitOptions(selected) {
  const list = UNITS.includes(selected) || !selected ? UNITS : [selected, ...UNITS];
  return list.map((u) => opt(u, U(u), u === selected)).join('');
}
function fieldError(input, msg) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');
  const e = document.createElement('div'); e.className = 'err'; e.textContent = msg; e.setAttribute('role', 'alert');
  let host = input.closest('label.field, .line') || input.parentElement;
  while (host.nextElementSibling && host.nextElementSibling.classList.contains('err')) host = host.nextElementSibling;
  host.after(e);
  return false;
}
function clearErrors(root) { $$('.err', root).forEach((e) => e.remove()); $$('.invalid', root).forEach((e) => { e.classList.remove('invalid'); e.removeAttribute('aria-invalid'); }); }

/* Line item editor (used by jobs and orders). */
function lineRow(line = {}, idx = 0) {
  const known = line.itemId && itemById(line.itemId);
  const isCustom = !known && !!line.name;
  const options = [`<option value="">${esc(t('Choose an item…'))}</option>`];
  for (const cat of CATEGORIES) {
    const items = DB.catalog.filter((c) => c.category === cat && (!c.hidden || c.id === line.itemId));
    if (items.length) options.push(`<optgroup label="${esc(catName(cat))}">${items.map((c) => opt(c.id, `${iname(c)} (${U(c.unit)})`, c.id === line.itemId)).join('')}</optgroup>`);
  }
  options.push(opt('__custom', t('Custom item…'), isCustom));
  return `<div class="line" data-line>
    <div class="line-top">
      <label class="sr" for="li-${idx}">${esc(t('Item {n}', { n: idx + 1 }))}</label>
      <select id="li-${idx}" data-f="item">${options.join('')}</select>
      <button type="button" class="line-del" data-act="line-del" aria-label="${esc(t('Remove item {n}', { n: idx + 1 }))}">${icon('trash')}</button>
    </div>
    <div class="custom" ${isCustom ? '' : 'hidden'}><label class="sr" for="lc-${idx}">${esc(t('Custom item name'))}</label>
      <input type="text" id="lc-${idx}" data-f="custom" placeholder="${esc(t('Item name, e.g. Kimchi'))}" value="${esc(isCustom ? line.name : '')}" maxlength="80"></div>
    <div class="line-qty">
      <label><span class="sr">${esc(t('Quantity'))}</span><input type="text" inputmode="decimal" data-f="qty" placeholder="${esc(t('Qty'))}" value="${line.qty != null ? esc(fmtQty(line.qty).replace(/,/g, '')) : ''}" aria-label="${esc(t('Quantity'))}"></label>
      <label><span class="sr">${esc(t('Unit'))}</span><select data-f="unit" aria-label="${esc(t('Unit'))}">${unitOptions(line.unit || (known ? known.unit : 'pcs'))}</select></label>
    </div>
  </div>`;
}
function linesEditor(lines) {
  const list = lines && lines.length ? lines : [{}];
  return `<div class="label" id="lines-label">${esc(t('Items'))}</div><div class="lines" data-lines aria-labelledby="lines-label">${list.map(lineRow).join('')}</div>
    <button type="button" class="btn sm ghost block" data-act="line-add">${icon('plus')} ${esc(t('Add another item'))}</button><div style="height:14px"></div>`;
}
function bindLines(sheet) {
  sheet.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-f="item"]');
    if (!sel) return;
    const line = sel.closest('[data-line]');
    const custom = $('.custom', line);
    custom.hidden = sel.value !== '__custom';
    if (sel.value === '__custom') $('input', custom).focus();
    const it = itemById(sel.value);
    if (it) $('[data-f="unit"]', line).innerHTML = unitOptions(it.unit);
  });
}
/** Read & validate lines. Duplicate item+unit rows are merged. Returns null if invalid. */
function readLines(sheet) {
  const out = []; let ok = true;
  const rows = $$('[data-line]', sheet);
  rows.forEach((row) => {
    const sel = $('[data-f="item"]', row), qtyEl = $('[data-f="qty"]', row), unit = $('[data-f="unit"]', row).value;
    const customEl = $('[data-f="custom"]', row);
    const blank = !sel.value && !qtyEl.value.trim();
    if (blank && rows.length > 1) return; // ignore empty extra rows
    let itemId = null, name = '';
    if (sel.value === '__custom') { name = norm(customEl.value); if (!name) ok = fieldError(customEl, t('Type the item name.')); }
    else if (sel.value) { const it = itemById(sel.value); itemId = it.id; name = it.name; }
    else ok = fieldError(sel, t('Choose an item.'));
    // Match a custom name to a catalogue item if it already exists.
    if (!itemId && name) { const m = DB.catalog.find((c) => sameName(c.name, name)); if (m) { itemId = m.id; name = m.name; } }
    const qty = parseQty(qtyEl.value);
    if (!(qty > 0)) ok = fieldError(qtyEl, t('Enter a quantity above 0, e.g. 8 or 2.5.'));
    if (!ok) return;
    const dup = out.find((l) => (itemId ? l.itemId === itemId : sameName(l.name, name)) && l.unit === unit);
    if (dup) dup.qty = Math.round((dup.qty + qty) * 1000) / 1000;
    else out.push({ itemId, name, qty, unit });
  });
  if (ok && !out.length) { ok = false; toast(t('Add at least one item.'), { error: true }); }
  return ok ? out : null;
}


/* ===== src/04-live.js ===== */

/* ---------- UI state (filters survive reloads; separate from data) ---------- */
const UI_KEY = 'bbk:ui';
const UI = Object.assign({
  tab: 'live',
  prod: { loc: 'all', status: 'open' },
  stock: { loc: 'rse', low: false },
  orders: { status: 'active', sup: 'all', loc: 'all', date: 'any', day: '' }
}, (() => { try { return JSON.parse(localStorage.getItem(UI_KEY) || '{}'); } catch (e) { return {}; } })());
const saveUI = () => { try { localStorage.setItem(UI_KEY, JSON.stringify({ prod: UI.prod, stock: UI.stock, orders: UI.orders })); } catch (e) {} };

/* ---------- Shared card renderers ---------- */
const itemList = (items) => `<ul class="items">${items.map((i) => `<li><span>${esc(lineName(i))}</span><b>${esc(fmtQty(i.qty))} ${esc(U(i.unit))}</b></li>`).join('')}</ul>`;
function waitText(job, now = Date.now()) {
  if (JOB_OPEN.includes(job.status)) {
    const ms = now - new Date(job.createdAt).getTime();
    return `<span class="wait${ms > 12 * 3600e3 ? ' long' : ''}">${esc(t('Waiting {time}', { time: fmtDuration(ms) }))}</span>`;
  }
  const end = (job.history.slice().reverse().find((h) => h.status === job.status) || {}).at;
  return end ? `<span>${esc(t(jobStatus(job.status).label))} ${esc(fmtWhen(end))}</span>` : '';
}
function jobCard(job, { compact = false, showLoc = true } = {}) {
  const st = jobStatus(job.status);
  const next = JOB_NEXT[job.status];
  const cls = job.status === 'ready' ? 'is-ready' : job.status === 'in_progress' ? 'is-progress' : JOB_OPEN.includes(job.status) ? '' : 'is-done';
  const title = showLoc ? locName(job.restaurantId) : (job.items[0] ? lineName(job.items[0]) + (job.items.length > 1 ? ' +' + (job.items.length - 1) : '') : '');
  return `<article class="card ${cls}">
    <div class="card-head" data-act="job-open" data-id="${esc(job.id)}" role="button" tabindex="0" aria-label="${esc(t('Open job for {place}', { place: locName(job.restaurantId) }))}">
      <div style="min-width:0"><p class="card-title">${esc(title)}${sampleBadge(job)}</p>
        <div class="card-meta">${waitText(job)}${job.requestedBy ? `<span>${esc(t('By {name}', { name: job.requestedBy }))}</span>` : ''}</div></div>
      ${badge(st)}
    </div>
    ${compact ? `<p class="small muted" style="margin:8px 0 0">${esc(itemsSummary(job.items))}</p>`
      : `${itemList(job.items)}${job.notes ? `<div class="note">${esc(job.notes)}</div>` : ''}`}
    ${next ? `<div class="card-actions"><button class="btn sm ${job.status === 'ready' ? '' : 'primary'}" data-act="job-status" data-id="${esc(job.id)}" data-status="${next[0]}">${esc(t(next[1]))}</button>
      ${compact ? '' : `<button class="btn sm ghost" data-act="job-open" data-id="${esc(job.id)}">${esc(t('Details'))}</button>`}</div>` : ''}
  </article>`;
}
function orderCard(o, { compact = false } = {}) {
  const st = orderStatus(o.status);
  const late = isOverdue(o);
  const probs = openProblems(o);
  const next = ORDER_NEXT[o.status];
  const cls = late || o.status === 'problem' || probs.length ? 'is-problem' : o.status === 'on_the_way' ? 'is-progress' : ORDER_ACTIVE.includes(o.status) ? '' : 'is-done';
  return `<article class="card ${cls}">
    <div class="card-head" data-act="order-open" data-id="${esc(o.id)}" role="button" tabindex="0" aria-label="${esc(t('Open order from {supplier}', { supplier: supName(o.supplierId) }))}">
      <div style="min-width:0"><p class="card-title">${esc(supName(o.supplierId))} → ${esc(locName(o.restaurantId))}${sampleBadge(o)}</p>
        <div class="card-meta"><span>${esc(t('Needed {when}', { when: fmtWhen(o.neededBy) }))}</span>
          ${late ? `<span class="wait long">${esc(t('{time} late', { time: fmtDuration(Date.now() - orderDue(o)) }))}</span>` : ''}</div></div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">${badge(st)}${late ? `<span class="badge s-late">${esc(t('Late'))}</span>` : ''}
        ${probs.length && o.status !== 'problem' ? `<span class="badge s-problem">${esc(tp(probs.length, 'problem'))}</span>` : ''}</div>
    </div>
    ${compact ? `<p class="small muted" style="margin:8px 0 0">${esc(itemsSummary(o.items))}</p>`
      : `${itemList(o.items)}${o.notes ? `<div class="note">${esc(o.notes)}</div>` : ''}`}
    ${probs.slice(0, compact ? 1 : 3).map((p) => `<p class="small s-problem" style="margin:8px 0 0;font-weight:700">⚠ ${esc(problemLabel(p.type))}${p.note ? ': ' + esc(p.note) : ''}</p>`).join('')}
    ${next ? `<div class="card-actions"><button class="btn sm primary" data-act="order-status" data-id="${esc(o.id)}" data-status="${next[0]}">${esc(t(next[1]))}</button>
      <button class="btn sm ghost" data-act="problem-new" data-id="${esc(o.id)}">${esc(t('Log problem'))}</button></div>` : ''}
  </article>`;
}
const problemLabel = (type) => t((PROBLEM_TYPES.find((p) => p.id === type) || { label: 'Problem' }).label);
function emptyBox(title, text, actions = '') { return `<div class="empty"><div class="big">${esc(title)}</div><p>${esc(text)}</p>${actions}</div>`; }

/* ---------- Live ---------- */
function liveData() {
  const now = Date.now(), today = dayKey();
  const open = DB.jobs.filter((j) => JOB_OPEN.includes(j.status));
  const ready = open.filter((j) => j.status === 'ready');
  const inProgress = open.filter((j) => j.status === 'in_progress');
  const requested = open.filter((j) => j.status === 'requested');
  const low = lowStockList();
  const vis = DB.orders.filter((o) => o.status !== 'cancelled');
  const late = vis.filter((o) => isOverdue(o, now)).sort((a, b) => orderDue(a) - orderDue(b));
  const dueToday = vis.filter((o) => ORDER_ACTIVE.includes(o.status) && !isOverdue(o, now) && o.neededBy && dayKey(o.neededBy) === today).sort((a, b) => orderDue(a) - orderDue(b));
  const onTheWayLater = vis.filter((o) => o.status === 'on_the_way' && !isOverdue(o, now) && (!o.neededBy || dayKey(o.neededBy) !== today));
  const problems = vis.filter((o) => o.status === 'problem' || openProblems(o).length);
  const deliveredToday = vis.filter((o) => o.status === 'delivered' && o.deliveredAt && dayKey(o.deliveredAt) === today);
  return { open, ready, inProgress, requested, low, late, dueToday, onTheWayLater, problems, deliveredToday };
}
function renderLive() {
  const d = liveData();
  const isEmpty = !DB.jobs.length && !DB.orders.length && !countedEntries();
  if (isEmpty) {
    return `<section class="welcome">
      <h2>${esc(t('Nothing to show yet'))}</h2>
      <p>${esc(t('Live fills up as you add production jobs, count stock and log orders. Everything stays on this device.'))}</p>
      <div class="steps">
        <button class="btn primary" data-act="job-new">${icon('production')}<span>${esc(t('Add a production job'))}<small>${esc(t('Sauces, pickles, prep for a restaurant'))}</small></span></button>
        <button class="btn" data-act="go" data-tab="stock">${icon('stock')}<span>${esc(t('Count stock'))}<small>${esc(t('Buns, oil, containers, sauces'))}</small></span></button>
        <button class="btn" data-act="order-new">${icon('orders')}<span>${esc(t('Log an order or delivery'))}<small>${esc(t('Bread And Macaroon, Swaledale, Production'))}</small></span></button>
      </div></section>
      <p class="small faint" style="text-align:center">${esc(t('Tip: open Settings to add this app to your home screen, change the language, or load clearly-labelled sample data to try it out.'))}</p>`;
  }
  const issues = new Set([...d.late, ...d.problems]).size;
  const stat = (num, lbl, tab, filter, cls = '') => `<button class="stat ${num && cls ? cls : ''}" data-act="stat" data-tab="${tab}" data-filter="${filter}"><span class="num">${num}</span><span class="lbl">${esc(lbl)}</span></button>`;
  const deliveries = [...d.late, ...d.problems.filter((o) => !d.late.includes(o)), ...d.dueToday, ...d.onTheWayLater];
  const nInProd = d.ready.length + d.inProgress.length;
  return `<div class="stats" role="group" aria-label="${esc(t('Headline counts'))}">
      ${stat(d.open.length, t('Open production jobs'), 'production', 'open')}
      ${stat(d.low.length, t('Low-stock items'), 'stock', 'low', 'warn')}
      ${stat(d.dueToday.length, t('Deliveries due today'), 'orders', 'today')}
      ${stat(issues, t('Late or problem'), 'orders', 'issues', 'alert')}
    </div>
    <div class="live-grid">
      <div class="live-col">
        <div class="section"><h3>${esc(t('In production'))}</h3><span class="count">${esc(t('{a} ready · {b} in progress', { a: d.ready.length, b: d.inProgress.length }))}</span></div>
        ${nInProd ? [...d.ready, ...d.inProgress].map((j) => jobCard(j, { compact: true })).join('')
          : emptyBox(t('Nothing on the go'), d.requested.length ? t('Jobs waiting to start: {n}', { n: d.requested.length }) : t('No production jobs are in progress or ready.'),
            d.requested.length ? `<button class="btn sm" data-act="stat" data-tab="production" data-filter="requested">${esc(t('See requested jobs'))}</button>` : `<button class="btn sm" data-act="job-new">${icon('plus')} ${esc(t('New job'))}</button>`)}
        ${d.requested.length && nInProd ? `<button class="btn sm ghost block" data-act="stat" data-tab="production" data-filter="requested">${esc(t('Requested, not started yet: {n}', { n: d.requested.length }))}</button>` : ''}
      </div>
      <div class="live-col">
        <div class="section"><h3>${esc(t('Low stock'))}</h3><span class="count">${esc(tp(d.low.length, 'item'))}</span></div>
        ${d.low.length ? d.low.slice(0, 12).map(({ loc, item, entry, threshold }) => `<button class="card" data-act="stock-set" data-loc="${esc(loc.id)}" data-item="${esc(item.id)}">
            <div class="mini"><div style="min-width:0"><p class="card-title">${esc(iname(item))}</p><div class="card-meta"><span>${esc(lname(loc))}</span><span>${esc(t('Alert at {n}', { n: fmtQty(threshold) }))}</span></div></div>
            <div style="text-align:right"><div style="font-size:24px;font-weight:900" class="s-low">${esc(fmtQty(entry.qty))}</div><span class="badge s-low">${esc(entry.qty <= 0 ? t('Out') : t('Low'))} · ${esc(U(item.unit))}</span></div></div></button>`).join('')
          + (d.low.length > 12 ? `<button class="btn sm ghost block" data-act="stat" data-tab="stock" data-filter="low">${esc(t('See all {n}', { n: d.low.length }))}</button>` : '')
          : emptyBox(t('Stock looks fine'), countedEntries() ? t('No counted item is at or below its alert level.') : t('No stock counted yet.'), `<button class="btn sm" data-act="go" data-tab="stock">${esc(countedEntries() ? t('Open stock') : t('Count stock'))}</button>`)}
      </div>
      <div class="live-col">
        <div class="section"><h3>${esc(t('Deliveries today'))}</h3><span class="count">${esc(t('{n} delivered', { n: d.deliveredToday.length }))}</span></div>
        ${deliveries.length ? deliveries.map((o) => orderCard(o, { compact: true })).join('')
          : emptyBox(t('No deliveries due'), t('Nothing due today, late, or with an open problem.'), `<button class="btn sm" data-act="order-new">${icon('plus')} ${esc(t('New order'))}</button>`)}
      </div>
    </div>
    <p class="small faint" style="text-align:center;margin-top:20px">${esc(t('Live updates automatically · Last refreshed {time}', { time: timeKey(new Date()) }))}</p>`;
}


/* ===== src/05-production.js ===== */

/* ---------- Production ---------- */
const PROD_FILTERS = [
  { id: 'open', label: 'Open', test: (j) => JOB_OPEN.includes(j.status) },
  { id: 'requested', label: 'Requested', test: (j) => j.status === 'requested' },
  { id: 'in_progress', label: 'In progress', test: (j) => j.status === 'in_progress' },
  { id: 'ready', label: 'Ready', test: (j) => j.status === 'ready' },
  { id: 'delivered', label: 'Delivered', test: (j) => j.status === 'delivered' },
  { id: 'cancelled', label: 'Cancelled', test: (j) => j.status === 'cancelled' },
  { id: 'all', label: 'All', test: () => true }
];
const STATUS_RANK = { ready: 0, in_progress: 1, requested: 2, delivered: 3, cancelled: 4 };
let openDetail = null; // { kind, id } — re-render detail sheet after changes
function refreshOpenSheet() { if (openDetail && $('#sheet-root').innerHTML) (openDetail.kind === 'job' ? jobDetail : orderDetail)(openDetail.id); }

function renderProduction() {
  const f = UI.prod;
  const byLoc = DB.jobs.filter((j) => f.loc === 'all' || j.restaurantId === f.loc);
  const filter = PROD_FILTERS.find((x) => x.id === f.status) || PROD_FILTERS[0];
  const list = byLoc.filter(filter.test);
  const chips = PROD_FILTERS.map((x) => `<button class="chip" aria-pressed="${x.id === filter.id}" data-act="prod-status" data-v="${x.id}">${esc(t(x.label))}<span class="n">${byLoc.filter(x.test).length}</span></button>`).join('');
  const usedLocs = new Set(DB.jobs.map((j) => j.restaurantId));
  const locOpts = opt('all', t('All restaurants'), f.loc === 'all') + DB.locations.filter((l) => !l.hidden || usedLocs.has(l.id)).map((l) => opt(l.id, locName(l.id), l.id === f.loc)).join('');
  let body;
  if (!DB.jobs.length) {
    body = emptyBox(t('No production jobs yet'), t('Add a job when a restaurant asks for sauces, pickles, prep or kit. It moves Requested → In progress → Ready → Delivered.'),
      `<button class="btn primary" data-act="job-new">${icon('plus')} ${esc(t('New production job'))}</button>`);
  } else if (!list.length) {
    body = emptyBox(t('Nothing matches'), t('No jobs match this status and restaurant.'),
      `<button class="btn sm" data-act="prod-reset">${esc(t('Show all open jobs'))}</button>`);
  } else {
    const groups = new Map();
    const order = DB.locations.map((l) => l.id);
    list.slice().sort((a, b) => (order.indexOf(a.restaurantId) - order.indexOf(b.restaurantId)) || (STATUS_RANK[a.status] - STATUS_RANK[b.status]) ||
      (JOB_OPEN.includes(a.status) ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.updatedAt) - new Date(a.updatedAt)))
      .forEach((j) => { if (!groups.has(j.restaurantId)) groups.set(j.restaurantId, []); groups.get(j.restaurantId).push(j); });
    body = Array.from(groups, ([loc, jobs]) => `<h3 class="group-title">${esc(locName(loc))}<small>${esc(tp(jobs.length, 'job'))}</small></h3>${jobs.map((j) => jobCard(j, { showLoc: false })).join('')}`).join('');
  }
  return `<div class="page-head"><h2>${esc(t('Production'))}</h2></div>
    <div class="filters"><div class="chips" role="group" aria-label="${esc(t('Filter by status'))}">${chips}</div>
      <label class="sr" for="prod-loc">${esc(t('Restaurant'))}</label><select id="prod-loc" data-change="prod-loc">${locOpts}</select></div>
    ${body}`;
}
function jobForm(job) {
  const isNew = !job;
  openDetail = null;
  job = job || { restaurantId: UI.prod.loc !== 'all' ? UI.prod.loc : '', items: [], notes: '', requestedBy: '' };
  const people = [...new Set(DB.jobs.map((j) => j.requestedBy).filter(Boolean))].slice(-30);
  openSheet({
    title: isNew ? t('New production job') : t('Edit job'),
    body: `<form id="job-form" novalidate>
      <label class="field"><span>${esc(t('Restaurant'))}</span><select name="restaurant" required><option value="">${esc(t('Choose a restaurant…'))}</option>${locationOptions(job.restaurantId, { includeHiddenId: job.restaurantId })}</select></label>
      ${linesEditor(job.items)}
      <label class="field"><span>${esc(t('Requested by'))}</span><input type="text" name="requestedBy" list="people" value="${esc(job.requestedBy)}" placeholder="${esc(t('e.g. Henrique'))}" maxlength="60" autocomplete="off"></label>
      <datalist id="people">${people.map((p) => `<option value="${esc(p)}">`).join('')}</datalist>
      <label class="field"><span>${esc(t('Notes'))}</span><textarea name="notes" maxlength="1000" placeholder="${esc(t('Pack sizes, lids, delivery details…'))}">${esc(job.notes)}</textarea></label>
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="job-form">${esc(isNew ? t('Add job') : t('Save changes'))}</button>`,
    onMount: (sheet) => {
      bindLines(sheet);
      $('#job-form', sheet).addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target; clearErrors(sheet);
        const btn = $('[type=submit]', sheet); btn.disabled = true;
        let ok = true;
        const restaurantId = form.restaurant.value;
        if (!restaurantId) ok = fieldError(form.restaurant, t('Choose which restaurant this is for.'));
        const items = readLines(sheet);
        if (!ok || !items) { btn.disabled = false; return; }
        const data = { restaurantId, items, requestedBy: norm(form.requestedBy.value), notes: form.notes.value.trim() };
        if (isNew) {
          const recent = DB.jobs.find((j) => JOB_OPEN.includes(j.status) && j.restaurantId === restaurantId && itemsSummary(j.items) === itemsSummary(items) && Date.now() - new Date(j.createdAt) < 30 * 60e3);
          if (recent && !(await confirmDialog({ title: t('Add it again?'), message: t('The same job for {place} was added {time} ago.', { place: locName(restaurantId), time: fmtDuration(Date.now() - new Date(recent.createdAt)) }), ok: t('Add anyway') }))) { btn.disabled = false; return; }
          const ts = nowISO();
          commit((db) => db.jobs.push({ id: uid('job'), ...data, status: 'requested', createdAt: ts, updatedAt: ts, history: [{ status: 'requested', at: ts }] }));
          closeSheet(true); toast(t('Job added for {place}', { place: locName(restaurantId) }));
        } else {
          commit(() => Object.assign(job, data, { updatedAt: nowISO() }));
          closeSheet(true); toast(t('Job updated'));
        }
      });
    }
  });
}
function setJobStatus(job, status) {
  const prev = job.status;
  if (prev === status) return;
  const ts = nowISO();
  commit(() => { job.status = status; job.updatedAt = ts; job.history.push({ status, at: ts }); });
  toast(`${locName(job.restaurantId)}: ${t(jobStatus(status).label)}`, {
    action: t('Undo'), onAction: () => { commit(() => { job.status = prev; job.history.pop(); job.updatedAt = nowISO(); }); refreshOpenSheet(); }
  });
}
function jobDetail(id) {
  const job = DB.jobs.find((j) => j.id === id);
  if (!job) return closeSheet(true);
  openSheet({
    title: locName(job.restaurantId),
    onClose: () => { openDetail = null; },
    body: `<div class="card-meta" style="margin:0 0 10px">${badge(jobStatus(job.status))}${sampleBadge(job)} ${waitText(job)}</div>
      ${itemList(job.items)}
      ${job.notes ? `<div class="note">${esc(job.notes)}</div>` : ''}
      <p class="small muted">${job.requestedBy ? esc(t('Requested by {name}', { name: job.requestedBy })) + ' · ' : ''}${esc(t('Added {when}', { when: fmtWhen(job.createdAt) }))}</p>
      <div class="label" style="margin-top:16px">${esc(t('Set status'))}</div>
      <div class="status-pick" role="group" aria-label="${esc(t('Job status'))}">
        ${JOB_STATUSES.map((s) => `<button type="button" class="${s.cls}" aria-pressed="${job.status === s.id}" data-act="job-status" data-id="${esc(job.id)}" data-status="${s.id}"><span class="badge ${s.cls}" style="border:0;padding:0">${esc(t(s.label))}</span></button>`).join('')}
      </div>
      <div class="label" style="margin-top:16px">${esc(t('History'))}</div>
      <ul class="history">${job.history.slice().reverse().map((h) => `<li><span>${esc(t(jobStatus(h.status).label))}</span><span>${esc(fmtWhen(h.at))}</span></li>`).join('')}</ul>`,
    foot: `<button class="btn danger" type="button" data-act="job-delete" data-id="${esc(job.id)}" aria-label="${esc(t('Delete job'))}">${icon('trash')}</button>
      <button class="btn" type="button" data-act="job-edit" data-id="${esc(job.id)}">${esc(t('Edit'))}</button>`
  });
  openDetail = { kind: 'job', id };
}


/* ===== src/06-stock.js ===== */

/* ---------- Stock ---------- */
function stockRow(locId, item) {
  const e = stockEntry(locId, item.id);
  const th = thresholdFor(locId, item.id);
  const low = isLow(locId, item.id);
  const counted = !!e && typeof e.qty === 'number';
  const name = esc(iname(item)), unit = esc(U(item.unit)), place = esc(locName(locId));
  const sub = [
    low ? `<span class="badge s-low">${esc(e.qty <= 0 ? t('Out') : t('Low'))}</span>` : '',
    `<span>${esc(t('Alert at {n}', { n: fmtQty(th) }))} ${unit}</span>`,
    counted ? `<span>${esc(t('Updated {when}', { when: fmtWhen(e.updatedAt) }))}</span>` : `<span>${esc(t('Not counted'))}</span>`,
    e && e.sample ? `<span class="badge s-sample">${esc(t('Sample'))}</span>` : ''
  ].join('');
  const step = item.step || 1;
  const a = `data-loc="${esc(locId)}" data-item="${esc(item.id)}"`;
  return `<div class="stock-row${low ? ' low' : ''}" data-row="${esc(locId)}|${esc(item.id)}">
    <button class="stock-info" data-act="stock-set" ${a} aria-label="${esc(t('Set {item} at {place}', { item: iname(item), place: locName(locId) }))}">
      <div class="stock-name">${name}</div><div class="stock-sub">${sub}</div></button>
    ${counted ? `<div class="stepper">
      <button class="step" data-act="stock-step" ${a} data-d="-1" aria-label="${esc(t('Remove {n}', { n: step }))} ${unit} ${name}" ${e.qty <= 0 ? 'disabled' : ''}>−</button>
      <button class="qty" data-act="stock-set" ${a} aria-label="${esc(fmtQty(e.qty))} ${unit}, ${esc(t('set exact amount'))}">${esc(fmtQty(e.qty))}<small>${unit}</small></button>
      <button class="step" data-act="stock-step" ${a} data-d="1" aria-label="${esc(t('Add {n}', { n: step }))} ${unit} ${name}">+</button>
    </div>` : `<button class="btn sm" data-act="stock-set" ${a} aria-label="${esc(t('Count'))} ${name}, ${place}">${esc(t('Count'))}</button>`}
  </div>`;
}
function renderStock() {
  const f = UI.stock;
  const locs = visibleLocations();
  if (f.loc !== 'all' && !locs.some((l) => l.id === f.loc)) f.loc = locs[0] ? locs[0].id : 'all';
  const lowCount = (id) => Object.keys(DB.stock[id] || {}).filter((it) => itemById(it) && !itemById(it).hidden && isLow(id, it)).length;
  const totalLow = lowStockList().length;
  const lowTag = (n) => (n ? `<span class="n">${esc(t('{n} low', { n }))}</span>` : '');
  const chips = [`<button class="chip" aria-pressed="${f.loc === 'all'}" data-act="stock-loc" data-v="all">${esc(t('All locations'))}${lowTag(totalLow)}</button>`]
    .concat(locs.map((l) => `<button class="chip" aria-pressed="${f.loc === l.id}" data-act="stock-loc" data-v="${esc(l.id)}">${esc(lname(l))}${lowTag(lowCount(l.id))}</button>`)).join('');
  const lowChip = `<button class="chip" aria-pressed="${f.low}" data-act="stock-low">${f.low ? '✓ ' : ''}${esc(t('Low stock only'))}</button>`;
  let body = '';
  const items = visibleCatalog();
  const showAllBtn = `<button class="btn sm" data-act="stock-low">${esc(t('Show all items'))}</button>`;
  if (f.loc === 'all') {
    body = locs.map((l) => {
      const rows = items.filter((it) => stockEntry(l.id, it.id) && (!f.low || isLow(l.id, it.id)));
      return rows.length ? `<h3 class="group-title">${esc(lname(l))}<small>${esc(tp(rows.length, 'item'))}</small></h3>${rows.map((it) => stockRow(l.id, it)).join('')}` : '';
    }).join('');
    if (!body) body = f.low && countedEntries()
      ? emptyBox(t('Nothing is low'), t('Every counted item is above its alert level.'), showAllBtn)
      : emptyBox(t('No stock counted yet'), t('Pick a location above, then tap Count next to an item to record what you have.'), locs[0] ? `<button class="btn primary" data-act="stock-loc" data-v="${esc(locs[0].id)}">${esc(t('Start with {place}', { place: lname(locs[0]) }))}</button>` : '');
  } else {
    const rowsFor = (cat) => items.filter((it) => it.category === cat && (!f.low || isLow(f.loc, it.id)));
    body = CATEGORIES.map((cat) => { const r = rowsFor(cat); return r.length ? `<h3 class="cat-head">${esc(catName(cat))}</h3>${r.map((it) => stockRow(f.loc, it)).join('')}` : ''; }).join('');
    if (!body) body = f.low ? emptyBox(t('Nothing is low here'), t('No counted item at {place} is at or below its alert level.', { place: locName(f.loc) }), showAllBtn)
      : emptyBox(t('No items in the catalogue'), t('Add items in Settings → Items.'), `<button class="btn sm" data-act="go" data-tab="settings">${esc(t('Open Settings'))}</button>`);
    else if (!Object.keys(DB.stock[f.loc] || {}).length && !f.low) body = `<p class="hint" style="margin:6px 2px 4px">${esc(t('Tap Count to record what {place} has. Alert levels are defaults; change them per item.', { place: locName(f.loc) }))}</p>` + body;
  }
  return `<div class="page-head"><h2>${esc(t('Stock'))}</h2></div>
    ${scanButtons('stock')}
    <div class="filters"><div class="chips" role="group" aria-label="${esc(t('Location'))}">${chips}</div><div class="chips" role="group" aria-label="${esc(t('Show'))}">${lowChip}</div></div>
    ${body}`;
}
function stepStock(locId, itemId, dir) {
  const it = itemById(itemId); const e = stockEntry(locId, itemId);
  if (!it || !e) return;
  const next = Math.max(0, Math.round((e.qty + dir * (it.step || 1)) * 1000) / 1000);
  const before = e.qty;
  commit(() => { e.qty = next; e.updatedAt = nowISO(); delete e.sample; logStock(locId, itemId, before, next, 'adjust'); }, { render: false });
  // Update just this row so focus and scroll stay put.
  const sel = `[data-row="${CSS.escape(locId + '|' + itemId)}"]`;
  const row = $(sel);
  if (row) {
    const focusedD = document.activeElement && document.activeElement.dataset.d;
    row.outerHTML = stockRow(locId, it);
    const target = focusedD && $(`${sel} [data-d="${focusedD}"]`);
    if (target && !target.disabled) target.focus({ preventScroll: true });
  }
  updateChrome();
}
function stockSheet(locId, itemId) {
  const it = itemById(itemId); if (!it) return;
  openDetail = null;
  const e = stockEntry(locId, itemId);
  const ownTh = e && typeof e.threshold === 'number' ? e.threshold : null;
  const unit = U(it.unit), step = it.step || 1;
  openSheet({
    title: iname(it),
    body: `<form id="stock-form" novalidate>
      <p class="muted" style="margin:0 0 14px">${esc(locName(locId))} · ${esc(e ? t('last updated {when}', { when: fmtWhen(e.updatedAt) }) : t('not counted yet'))}</p>
      <label class="field"><span>${esc(t('Quantity on hand ({unit})', { unit }))}</span>
        <input type="text" inputmode="decimal" name="qty" value="${e ? esc(String(e.qty)) : ''}" placeholder="0" autofocus style="font-size:28px;font-weight:800;min-height:64px" autocomplete="off"></label>
      <div class="btn-row" style="margin:-4px 0 16px">${[-step, step].map((d) => `<button type="button" class="btn sm" data-nudge="${d}">${d > 0 ? '+' : '−'}${Math.abs(d)} ${esc(unit)}</button>`).join('')}</div>
      <label class="field"><span>${esc(t('Low-stock alert at this location ({unit})', { unit }))}</span>
        <input type="text" inputmode="decimal" name="threshold" value="${ownTh != null ? esc(String(ownTh)) : ''}" placeholder="${esc(t('Default: {n}', { n: fmtQty(it.threshold) }))}" autocomplete="off"></label>
      <p class="hint">${esc(t('Leave empty to use the item default ({n} {unit}). Alerts show when stock is at or below this level.', { n: fmtQty(it.threshold), unit }))}</p>
      ${e ? `<button type="button" class="btn ghost block sm" data-act="stock-uncount" data-loc="${esc(locId)}" data-item="${esc(itemId)}">${esc(t('Mark as not counted'))}</button>` : ''}
      ${stockHistoryHtml(locId, itemId)}
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="stock-form">${esc(t('Save'))}</button>`,
    onMount: (sheet) => {
      const form = $('#stock-form', sheet);
      sheet.addEventListener('click', (ev) => {
        const b = ev.target.closest('[data-nudge]'); if (!b) return;
        const cur = parseQty(form.qty.value); const base = Number.isNaN(cur) ? 0 : cur;
        form.qty.value = String(Math.max(0, Math.round((base + Number(b.dataset.nudge)) * 1000) / 1000));
      });
      form.addEventListener('submit', (ev) => {
        ev.preventDefault(); clearErrors(sheet);
        const raw = form.qty.value.trim();
        const qty = raw === '' ? NaN : parseQty(raw);
        let ok = true;
        if (Number.isNaN(qty)) ok = fieldError(form.qty, t('Enter a number, 0 or more (e.g. 40 or 12.5).'));
        const thRaw = form.threshold.value.trim();
        const th = thRaw === '' ? null : parseQty(thRaw);
        if (thRaw !== '' && Number.isNaN(th)) ok = fieldError(form.threshold, t('Enter a number, 0 or more, or leave empty.'));
        if (!ok) return;
        commit((db) => {
          db.stock[locId] = db.stock[locId] || {};
          const prevQty = db.stock[locId][itemId] ? db.stock[locId][itemId].qty : null;
          if (prevQty !== qty) logStock(locId, itemId, prevQty, qty, 'count');
          const entry = { qty, updatedAt: nowISO() };
          if (th != null) entry.threshold = th;
          db.stock[locId][itemId] = entry;
        });
        closeSheet(true);
        toast(`${iname(it)}: ${fmtQty(qty)} ${unit}${qty <= (th != null ? th : it.threshold) ? ' — ' + t('low') : ''}`);
      });
    }
  });
}


/* ===== src/07-orders.js ===== */

/* ---------- Orders & deliveries ---------- */
const ORDER_FILTERS = [
  { id: 'active', label: 'Upcoming', test: (o) => ORDER_ACTIVE.includes(o.status) },
  { id: 'overdue', label: 'Overdue', test: (o) => isOverdue(o) },
  { id: 'issues', label: 'Late or problem', test: (o) => isOverdue(o) || o.status === 'problem' || openProblems(o).length > 0 },
  { id: 'problem', label: 'Problems', test: (o) => o.status === 'problem' || openProblems(o).length > 0 },
  { id: 'delivered', label: 'Delivered', test: (o) => o.status === 'delivered' },
  { id: 'cancelled', label: 'Cancelled', test: (o) => o.status === 'cancelled' },
  { id: 'all', label: 'All', test: () => true }
];
const DATE_FILTERS = [
  { id: 'any', label: 'Any date' }, { id: 'today', label: 'Today' }, { id: 'tomorrow', label: 'Tomorrow' },
  { id: 'week', label: 'Next 7 days' }, { id: 'past', label: 'Before today' }, { id: 'day', label: 'Pick a date…' }
];
function dateMatch(o, f) {
  if (f.date === 'any') return true;
  if (!o.neededBy) return false;
  const k = dayKey(o.neededBy), today = dayKey();
  switch (f.date) {
    case 'today': return k === today;
    case 'tomorrow': return k === addDays(today, 1);
    case 'week': return k >= today && k <= addDays(today, 6);
    case 'past': return k < today;
    case 'day': return !f.day || k === f.day;
    default: return true;
  }
}
function renderOrders() {
  const f = UI.orders;
  const base = DB.orders.filter((o) => (f.sup === 'all' || o.supplierId === f.sup) && (f.loc === 'all' || o.restaurantId === f.loc) && dateMatch(o, f));
  const filter = ORDER_FILTERS.find((x) => x.id === f.status) || ORDER_FILTERS[0];
  const list = base.filter(filter.test);
  const chips = ORDER_FILTERS.filter((x) => x.id !== 'issues' || f.status === 'issues')
    .map((x) => `<button class="chip" aria-pressed="${x.id === filter.id}" data-act="orders-status" data-v="${x.id}">${esc(t(x.label))}<span class="n">${base.filter(x.test).length}</span></button>`).join('');
  const usedSup = new Set(DB.orders.map((o) => o.supplierId)), usedLoc = new Set(DB.orders.map((o) => o.restaurantId));
  const supOpts = opt('all', t('All suppliers'), f.sup === 'all') + DB.suppliers.filter((s) => !s.hidden || usedSup.has(s.id)).map((s) => opt(s.id, supName(s.id), s.id === f.sup)).join('');
  const locOpts = opt('all', t('All restaurants'), f.loc === 'all') + DB.locations.filter((l) => !l.hidden || usedLoc.has(l.id)).map((l) => opt(l.id, locName(l.id), l.id === f.loc)).join('');
  const dateOpts = DATE_FILTERS.map((d) => opt(d.id, t(d.label), d.id === f.date)).join('');
  let body;
  if (!DB.orders.length) {
    body = emptyBox(t('No orders yet'), t('Log what you ordered from Bread And Macaroon, Swaledale or the production kitchen, and when it is needed. Late deliveries show up here and on Live.'),
      `<button class="btn primary" data-act="order-new">${icon('plus')} ${esc(t('New order'))}</button>`);
  } else if (!list.length) {
    body = emptyBox(t('Nothing matches'), t('No orders match these filters.'), `<button class="btn sm" data-act="orders-reset">${esc(t('Clear filters'))}</button>`);
  } else {
    const now = Date.now(), today = dayKey();
    const done = ['delivered', 'cancelled'];
    const active = list.filter((o) => !done.includes(o.status)).sort((a, b) => orderDue(a) - orderDue(b));
    const closed = list.filter((o) => done.includes(o.status)).sort((a, b) => orderDue(b) - orderDue(a));
    const groups = [];
    const push = (title, items) => { if (items.length) groups.push({ title, items }); };
    push(t('Overdue'), active.filter((o) => isOverdue(o, now)));
    push(t('Problems'), active.filter((o) => o.status === 'problem'));
    const rest = active.filter((o) => !isOverdue(o, now) && o.status !== 'problem');
    const byDay = new Map();
    rest.forEach((o) => { const k = o.neededBy ? dayKey(o.neededBy) : 'none'; if (!byDay.has(k)) byDay.set(k, []); byDay.get(k).push(o); });
    byDay.forEach((items, k) => push(k === 'none' ? t('No date') : (k < today ? t('Earlier') + ' · ' : '') + fmtDay(k), items));
    push(filter.id === 'cancelled' ? t('Cancelled') : t('Delivered & closed'), closed);
    body = groups.map((g) => `<h3 class="group-title">${esc(g.title)}<small>${g.items.length}</small></h3>${g.items.map((o) => orderCard(o)).join('')}`).join('');
  }
  return `<div class="page-head"><h2>${esc(t('Orders'))}</h2><button class="btn sm" data-act="problem-new">${icon('alert')} ${esc(t('Log problem'))}</button></div>
    ${scanButtons('orders')}
    <div class="filters"><div class="chips" role="group" aria-label="${esc(t('Filter by status'))}">${chips}</div>
      <div class="select-row">
        <label><span class="sr">${esc(t('Supplier'))}</span><select data-change="orders-sup" aria-label="${esc(t('Supplier'))}">${supOpts}</select></label>
        <label><span class="sr">${esc(t('Restaurant'))}</span><select data-change="orders-loc" aria-label="${esc(t('Restaurant'))}">${locOpts}</select></label>
        <label><span class="sr">${esc(t('Needed-by date'))}</span><select data-change="orders-date" aria-label="${esc(t('Needed-by date'))}">${dateOpts}</select></label>
        ${f.date === 'day' ? `<label><span class="sr">${esc(t('Pick a date…'))}</span><input type="date" data-change="orders-day" value="${esc(f.day || dayKey())}" aria-label="${esc(t('Pick a date…'))}"></label>` : ''}
      </div></div>
    ${body}`;
}
function orderForm(o) {
  const isNew = !o;
  openDetail = null;
  const tomorrow = addDays(dayKey(), 1);
  o = o || { supplierId: UI.orders.sup !== 'all' ? UI.orders.sup : '', restaurantId: UI.orders.loc !== 'all' ? UI.orders.loc : '', items: [], notes: '', neededBy: londonToDate(tomorrow, '09:00').toISOString() };
  openSheet({
    title: isNew ? t('New order') : t('Edit order'),
    body: `<form id="order-form" novalidate>
      <label class="field"><span>${esc(t('Supplier'))}</span><select name="supplier" required><option value="">${esc(t('Choose a supplier…'))}</option>${supplierOptions(o.supplierId, { includeHiddenId: o.supplierId })}</select></label>
      <label class="field"><span>${esc(t('Deliver to'))}</span><select name="restaurant" required><option value="">${esc(t('Choose a restaurant…'))}</option>${locationOptions(o.restaurantId, { includeHiddenId: o.restaurantId })}</select></label>
      ${linesEditor(o.items)}
      <div class="row2">
        <label class="field"><span>${esc(t('Needed by (date)'))}</span><input type="date" name="date" value="${esc(o.neededBy ? dayKey(o.neededBy) : tomorrow)}" required></label>
        <label class="field"><span>${esc(t('Time'))}</span><input type="time" name="time" value="${esc(o.neededBy ? timeKey(o.neededBy) : '09:00')}" required step="300"></label>
      </div>
      <p class="hint">${esc(t('UK time (Europe/London).'))}</p>
      <label class="field"><span>${esc(t('Notes'))}</span><textarea name="notes" maxlength="1000" placeholder="${esc(t('Order reference, contact, delivery instructions…'))}">${esc(o.notes)}</textarea></label>
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="order-form">${esc(isNew ? t('Add order') : t('Save changes'))}</button>`,
    onMount: (sheet) => {
      bindLines(sheet);
      $('#order-form', sheet).addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target; clearErrors(sheet);
        const btn = $('[type=submit]', sheet); btn.disabled = true;
        let ok = true;
        if (!form.supplier.value) ok = fieldError(form.supplier, t('Choose a supplier.'));
        if (!form.restaurant.value) ok = fieldError(form.restaurant, t('Choose where it is delivered.'));
        if (!/^\d{4}-\d{2}-\d{2}$/.test(form.date.value)) ok = fieldError(form.date, t('Pick a date.'));
        if (!/^\d{2}:\d{2}/.test(form.time.value)) ok = fieldError(form.time, t('Pick a time.'));
        const items = readLines(sheet);
        if (!ok || !items) { btn.disabled = false; return; }
        const neededBy = londonToDate(form.date.value, form.time.value.slice(0, 5)).toISOString();
        const data = { supplierId: form.supplier.value, restaurantId: form.restaurant.value, items, neededBy, notes: form.notes.value.trim() };
        if (isNew) {
          const recent = DB.orders.find((x) => x.status !== 'cancelled' && x.supplierId === data.supplierId && x.restaurantId === data.restaurantId && x.neededBy === neededBy && itemsSummary(x.items) === itemsSummary(items));
          if (recent && !(await confirmDialog({ title: t('Add it again?'), message: t('An identical order for the same time already exists.'), ok: t('Add anyway') }))) { btn.disabled = false; return; }
          const ts = nowISO();
          commit((db) => db.orders.push({ id: uid('ord'), ...data, status: 'ordered', createdAt: ts, updatedAt: ts, history: [{ status: 'ordered', at: ts }], problems: [] }));
          closeSheet(true); toast(t('Order added · needed {when}', { when: fmtWhen(neededBy) }));
        } else {
          commit(() => Object.assign(o, data, { updatedAt: nowISO() }));
          closeSheet(true); toast(t('Order updated'));
        }
      });
    }
  });
}
function setOrderStatus(o, status) {
  const prev = o.status, prevDelivered = o.deliveredAt;
  if (prev === status) return;
  const ts = nowISO();
  commit(() => { o.status = status; o.updatedAt = ts; o.history.push({ status, at: ts }); if (status === 'delivered') o.deliveredAt = ts; });
  toast(`${supName(o.supplierId)}: ${t(orderStatus(status).label)}`, {
    action: t('Undo'), onAction: () => { commit(() => { o.status = prev; o.deliveredAt = prevDelivered; o.history.pop(); o.updatedAt = nowISO(); }); refreshOpenSheet(); }
  });
}
function orderDetail(id) {
  const o = DB.orders.find((x) => x.id === id);
  if (!o) return closeSheet(true);
  const late = isOverdue(o);
  openSheet({
    title: `${supName(o.supplierId)} → ${locName(o.restaurantId)}`,
    onClose: () => { openDetail = null; },
    body: `<div class="card-meta" style="margin:0 0 10px">${badge(orderStatus(o.status))}${late ? `<span class="badge s-late">${esc(t('Late'))}</span>` : ''}${sampleBadge(o)}
        <span>${esc(t('Needed {when}', { when: fmtWhen(o.neededBy) }))}</span></div>
      ${itemList(o.items)}
      ${o.notes ? `<div class="note">${esc(o.notes)}</div>` : ''}
      <p class="small muted">${esc(t('Added {when}', { when: fmtWhen(o.createdAt) }))}${o.deliveredAt ? ' · ' + esc(t('delivered {when}', { when: fmtWhen(o.deliveredAt) })) : ''}</p>
      <div class="label" style="margin-top:16px">${esc(t('Set status'))}</div>
      <div class="status-pick" role="group" aria-label="${esc(t('Order status'))}">
        ${ORDER_STATUSES.map((s) => `<button type="button" class="${s.cls}" aria-pressed="${o.status === s.id}" data-act="${s.id === 'problem' ? 'problem-new' : 'order-status'}" data-id="${esc(o.id)}" data-status="${s.id}"><span class="badge ${s.cls}" style="border:0;padding:0">${esc(t(s.label))}</span></button>`).join('')}
      </div>
      <div class="label" style="margin-top:16px">${esc(t('Problems'))}</div>
      ${o.problems.length ? o.problems.slice().reverse().map((p) => `<div class="problem${p.resolvedAt ? ' resolved' : ''}">
          <div class="problem-head"><span>${p.resolvedAt ? '✓ ' : '⚠ '}${esc(problemLabel(p.type))}${p.creditRequested ? ' · ' + esc(t('credit requested')) : ''}</span>
          ${p.resolvedAt ? `<span class="small muted">${esc(t('Resolved {when}', { when: fmtWhen(p.resolvedAt) }))}</span>` : `<button class="btn sm" data-act="problem-resolve" data-id="${esc(o.id)}" data-pid="${esc(p.id)}">${esc(t('Resolve'))}</button>`}</div>
          ${p.note ? `<p style="margin:6px 0 0;white-space:pre-wrap">${esc(p.note)}</p>` : ''}<p class="small muted" style="margin:4px 0 0">${esc(t('Logged {when}', { when: fmtWhen(p.at) }))}</p></div>`).join('')
        : `<p class="small muted" style="margin:0">${esc(t('No problems logged.'))}</p>`}
      <button class="btn sm block" style="margin-top:10px" data-act="problem-new" data-id="${esc(o.id)}">${icon('alert')} ${esc(t('Log a problem'))}</button>
      <div class="label" style="margin-top:16px">${esc(t('History'))}</div>
      <ul class="history">${o.history.slice().reverse().map((h) => `<li><span>${esc(h.problemType ? t('Problem') + ': ' + problemLabel(h.problemType) : h.resolved ? t('Problem resolved') : t(orderStatus(h.status).label))}</span><span>${esc(fmtWhen(h.at))}</span></li>`).join('')}</ul>`,
    foot: `<button class="btn danger" type="button" data-act="order-delete" data-id="${esc(o.id)}" aria-label="${esc(t('Delete order'))}">${icon('trash')}</button>
      <button class="btn" type="button" data-act="order-edit" data-id="${esc(o.id)}">${esc(t('Edit'))}</button>`
  });
  openDetail = { kind: 'order', id };
}
function problemForm(orderId) {
  const candidates = DB.orders.filter((o) => o.status !== 'cancelled').sort((a, b) => orderDue(b) - orderDue(a)).slice(0, 60);
  if (!orderId && !candidates.length) { toast(t('Add an order first, then log a problem against it.')); return; }
  const o = orderId && DB.orders.find((x) => x.id === orderId);
  const late = o && isOverdue(o);
  const returnTo = openDetail && openDetail.kind === 'order' && openDetail.id === orderId ? orderId : null;
  openDetail = null;
  openSheet({
    title: t('Log delivery problem'),
    onClose: () => { if (returnTo) orderDetail(returnTo); },
    body: `<form id="problem-form" novalidate>
      ${o ? `<p class="muted" style="margin:0 0 14px">${esc(supName(o.supplierId))} → ${esc(locName(o.restaurantId))} · ${esc(t('needed {when}', { when: fmtWhen(o.neededBy) }))}</p><input type="hidden" name="order" value="${esc(o.id)}">`
        : `<label class="field"><span>${esc(t('Which order?'))}</span><select name="order" required><option value="">${esc(t('Choose an order…'))}</option>${candidates.map((c) => opt(c.id, `${fmtWhen(c.neededBy)} · ${supName(c.supplierId)} → ${locName(c.restaurantId)}`, false)).join('')}</select></label>`}
      <div class="label" id="ptype">${esc(t('What went wrong?'))}</div>
      <div class="chooser" role="radiogroup" aria-labelledby="ptype">${PROBLEM_TYPES.map((p) => `<button type="button" role="radio" aria-pressed="${late && p.id === 'late'}" aria-checked="${late && p.id === 'late'}" data-ptype="${p.id}">${esc(t(p.label))}</button>`).join('')}</div>
      <label class="field"><span>${esc(t('Details'))}</span><textarea name="note" maxlength="1000" placeholder="${esc(t('e.g. 5 kg chicken bag split, 10.65 kg wings instead of 16.15 kg'))}"></textarea></label>
      <label class="check"><input type="checkbox" name="credit"> ${esc(t('Credit or refund requested'))}</label>
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="problem-form">${esc(t('Log problem'))}</button>`,
    onMount: (sheet) => {
      let type = late ? 'late' : '';
      const chooser = $('.chooser', sheet);
      chooser.addEventListener('click', (e) => {
        const b = e.target.closest('[data-ptype]'); if (!b) return;
        type = b.dataset.ptype;
        $$('[data-ptype]', chooser).forEach((x) => { x.setAttribute('aria-pressed', x === b); x.setAttribute('aria-checked', x === b); });
      });
      $('#problem-form', sheet).addEventListener('submit', (e) => {
        e.preventDefault(); clearErrors(sheet);
        const form = e.target; let ok = true;
        const target = DB.orders.find((x) => x.id === form.order.value);
        if (!target) ok = fieldError(form.order, t('Choose the order this is about.'));
        if (!type) { ok = false; const er = document.createElement('div'); er.className = 'err'; er.setAttribute('role', 'alert'); er.textContent = t('Choose what went wrong.'); chooser.after(er); }
        if (!ok) return;
        const ts = nowISO();
        commit(() => {
          target.problems.push({ id: uid('prb'), type, note: form.note.value.trim(), creditRequested: form.credit.checked, at: ts });
          target.history.push({ status: 'problem', at: ts, problemType: type });
          target.status = 'problem'; target.updatedAt = ts;
        });
        closeSheet(true); toast(t('Problem logged'));
        if (returnTo) orderDetail(returnTo);
      });
    }
  });
}
function resolveProblem(o, pid) {
  const p = o.problems.find((x) => x.id === pid); if (!p) return;
  const ts = nowISO();
  commit(() => {
    p.resolvedAt = ts;
    if (o.status === 'problem' && !openProblems(o).length) {
      o.status = 'delivered'; o.deliveredAt = o.deliveredAt || ts;
      o.history.push({ status: 'delivered', at: ts, resolved: true });
    }
    o.updatedAt = ts;
  });
  toast(t('Problem resolved'));
}


/* ===== src/07b-invoice-ocr.js ===== */

/* ---------- Invoice scanning: file storage, OCR, parsing, product matching ----------
 * Everything runs on the phone. Tesseract.js and pdf.js live in /vendor and load only when a scan starts;
 * the service worker caches them after first use so later scans work offline. */
const OCR_MAX_PAGES = 5;
const VENDOR = (p) => new URL('vendor/' + p, document.baseURI).href;

/* IndexedDB for invoice images (localStorage is too small for photos). */
const FILES_DB = 'bbk-files';
function filesDb() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('IndexedDB unavailable'));
    const req = indexedDB.open(FILES_DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore('scans', { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbScan(mode, arg) {
  const db = await filesDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('scans', mode === 'get' ? 'readonly' : 'readwrite');
    const store = tx.objectStore('scans');
    const req = mode === 'get' ? store.get(arg) : mode === 'put' ? store.put(arg) : mode === 'delete' ? store.delete(arg) : store.clear();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}
const scanGet = (id) => idbScan('get', id).catch(() => null);
const scanPut = (rec) => idbScan('put', rec);
const scanDelete = (id) => idbScan('delete', id).catch(() => {});
const scanClearAll = () => idbScan('clear').catch(() => {});

/* On-demand script loading */
const loaded = {};
function loadScript(src) {
  if (!loaded[src]) loaded[src] = new Promise((resolve, reject) => {
    const s = document.createElement('script'); s.src = src; s.async = true;
    s.onload = resolve; s.onerror = () => { delete loaded[src]; reject(new Error('Could not load ' + src)); };
    document.head.appendChild(s);
  });
  return loaded[src];
}
let pdfjsPromise = null;
function loadPdfJs() {
  if (!pdfjsPromise) pdfjsPromise = import(VENDOR('pdfjs/pdf.min.mjs')).then((m) => { m.GlobalWorkerOptions.workerSrc = VENDOR('pdfjs/pdf.worker.min.mjs'); return m; })
    .catch((e) => { pdfjsPromise = null; throw e; });
  return pdfjsPromise;
}
let ocrWorker = null, ocrWorkerLangs = '', ocrIdle = null, ocrProgress = null;
async function getOcrWorker(langs) {
  clearTimeout(ocrIdle);
  if (ocrWorker && ocrWorkerLangs === langs) return ocrWorker;
  if (ocrWorker) { try { await ocrWorker.terminate(); } catch (e) {} ocrWorker = null; }
  await loadScript(VENDOR('tesseract/tesseract.min.js'));
  ocrWorker = await window.Tesseract.createWorker(langs.split('+'), 1, {
    workerPath: VENDOR('tesseract/worker.min.js'), corePath: VENDOR('tesseract/core'), langPath: VENDOR('tesseract/lang'),
    gzip: true, workerBlobURL: false,
    logger: (m) => { if (ocrProgress && m && typeof m.progress === 'number') ocrProgress(m.status, m.progress); }
  });
  ocrWorkerLangs = langs;
  return ocrWorker;
}
function releaseOcrWorkerSoon() { clearTimeout(ocrIdle); ocrIdle = setTimeout(async () => { if (ocrWorker) { try { await ocrWorker.terminate(); } catch (e) {} ocrWorker = null; } }, 60000); }

/* Images */
function canvasOf(w, h) { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; }
const canvasBlob = (c, q = 0.75) => new Promise((r) => c.toBlob((b) => r(b), 'image/jpeg', q));
async function fileToCanvas(blob, maxSide = 2200) {
  let bmp;
  try { bmp = await createImageBitmap(blob, { imageOrientation: 'from-image' }); }
  catch (e) {
    bmp = await new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => reject(new Error('bad image')); img.src = URL.createObjectURL(blob); });
  }
  const w = bmp.width, h = bmp.height;
  const scale = Math.min(maxSide / Math.max(w, h), w < 1200 ? 1600 / w : 1);
  const c = canvasOf(w * scale, h * scale);
  const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high'; ctx.drawImage(bmp, 0, 0, c.width, c.height);
  return c;
}
function scaledCopy(src, maxSide) {
  const s = Math.min(1, maxSide / Math.max(src.width, src.height));
  const c = canvasOf(src.width * s, src.height * s); c.getContext('2d').drawImage(src, 0, 0, c.width, c.height); return c;
}
function rotateCanvas(src, quarterTurns = 1) {
  const q = ((quarterTurns % 4) + 4) % 4; if (!q) return src;
  const c = q % 2 ? canvasOf(src.height, src.width) : canvasOf(src.width, src.height);
  const ctx = c.getContext('2d'); ctx.translate(c.width / 2, c.height / 2); ctx.rotate(q * Math.PI / 2); ctx.drawImage(src, -src.width / 2, -src.height / 2);
  return c;
}
/** Light clean-up for OCR: greyscale + contrast stretch (ignores the darkest/lightest 1%). */
function preprocessForOcr(src) {
  const c = canvasOf(src.width, src.height); const ctx = c.getContext('2d'); ctx.drawImage(src, 0, 0);
  const img = ctx.getImageData(0, 0, c.width, c.height), d = img.data, hist = new Uint32Array(256);
  for (let i = 0; i < d.length; i += 4) { const g = (d[i] * 299 + d[i + 1] * 587 + d[i + 2] * 114) / 1000 | 0; d[i] = g; hist[g]++; }
  const total = d.length / 4; let lo = 0, hi = 255, acc = 0;
  for (; lo < 255; lo++) { acc += hist[lo]; if (acc > total * 0.01) break; }
  acc = 0; for (; hi > 0; hi--) { acc += hist[hi]; if (acc > total * 0.01) break; }
  const range = Math.max(30, hi - lo);
  for (let i = 0; i < d.length; i += 4) { const v = Math.max(0, Math.min(255, ((d[i] - lo) * 255) / range)); d[i] = d[i + 1] = d[i + 2] = v; }
  ctx.putImageData(img, 0, 0);
  return c;
}

/** Turn a file into page canvases (+ text when a PDF already has a text layer). */
async function filePages(file, onStep) {
  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name || '');
  if (!isPdf) return { pages: [{ canvas: await fileToCanvas(file), text: null }], totalPages: 1, isPdf: false };
  onStep('pdf', 0);
  const pdfjs = await loadPdfJs();
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false }).promise;
  const n = Math.min(doc.numPages, OCR_MAX_PAGES), pages = [];
  for (let i = 1; i <= n; i++) {
    onStep('pdf', (i - 1) / n);
    const page = await doc.getPage(i);
    const vp1 = page.getViewport({ scale: 1 });
    const vp = page.getViewport({ scale: Math.min(3, 2000 / Math.max(vp1.width, vp1.height)) });
    const canvas = canvasOf(vp.width, vp.height);
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    let text = null;
    try { text = pdfTextLines(await page.getTextContent()); } catch (e) {}
    pages.push({ canvas, text: text && text.replace(/\s/g, '').length > 8 ? text : null });
  }
  return { pages, totalPages: doc.numPages, isPdf: true };
}
/** Rebuild visual lines from a PDF text layer (group by baseline, sort left to right). */
function pdfTextLines(content) {
  const rows = [];
  for (const it of content.items) {
    if (!it.str || !it.str.trim()) continue;
    const x = it.transform[4], y = it.transform[5];
    let row = rows.find((r) => Math.abs(r.y - y) < 3);
    if (!row) rows.push(row = { y, parts: [] });
    row.parts.push({ x, s: it.str, w: it.width || 0 });
  }
  return rows.sort((a, b) => b.y - a.y).map((r) => {
    r.parts.sort((a, b) => a.x - b.x);
    let out = '', end = null;
    for (const p of r.parts) { out += end == null ? p.s : (p.x - end > 12 ? '   ' : ' ') + p.s; end = p.x + p.w; }
    return out.trim();
  }).join('\n');
}

/** OCR one canvas. Lines Tesseract itself is unsure about (< 40%) are dropped to cut noise. */
async function recogniseCanvas(worker, canvas) {
  const { data } = await worker.recognize(preprocessForOcr(canvas));
  const conf = typeof data.confidence === 'number' ? Math.round(data.confidence) : 0;
  const lines = Array.isArray(data.lines) && data.lines.length ? data.lines : null;
  const text = lines ? lines.filter((l) => (l.confidence || 0) >= 40).map((l) => l.text.replace(/\n$/, '')).join('\n') : (data.text || '');
  return { text, conf };
}
/** Full pipeline: file → { text, confidence, lines, supplierId, ... }. onStep(stage, fraction). */
async function runInvoiceOcr(pages, onStep) {
  const langs = LANG === 'pl' ? 'eng+pol' : 'eng';
  const texts = []; const confs = []; let usedOcr = false;
  for (let i = 0; i < pages.length; i++) {
    const p = pages[i];
    if (p.text) { texts.push(p.text); confs.push(99); continue; }
    usedOcr = true;
    onStep('load', 0);
    ocrProgress = (status, prog) => onStep(/recogniz/i.test(status) ? 'read' : 'load', (i + (/recogniz/i.test(status) ? prog : 0)) / pages.length);
    const worker = await getOcrWorker(langs);
    let best = await recogniseCanvas(worker, p.canvas);
    // Sideways or upside-down photo? Low confidence → try the other orientations and keep the best.
    if (best.conf < 60) {
      for (const q of [1, 3, 2]) {
        const c = rotateCanvas(p.canvas, q);
        const r = await recogniseCanvas(worker, c);
        if (r.conf > best.conf + 8) best = { ...r, canvas: c };
        if (best.conf >= 75) break;
      }
    }
    if (best.canvas) { p.canvas = best.canvas; p.rotated = true; } // stored image follows the orientation that read best
    texts.push(best.text); confs.push(best.conf);
  }
  ocrProgress = null;
  if (usedOcr) releaseOcrWorkerSoon();
  const text = texts.join('\n');
  return { text, confidence: Math.round(confs.reduce((a, b) => a + b, 0) / Math.max(1, confs.length)), usedOcr, langs: usedOcr ? langs : 'pdf-text' };
}

/* ---------- Parsing invoice text into lines ---------- */
const UNIT_WORDS = [
  [/^(kg|kgs|kilo|kilos|kilogram|kilograms)$/i, 'kg', 1], [/^(g|gr|grams?)$/i, 'kg', 0.001],
  [/^(l|lt|ltr|ltrs|litre|litres|liter|liters)$/i, 'L', 1], [/^(ml)$/i, 'L', 0.001],
  [/^(pcs|pc|pce|pces|ea|each|unit|units|x|nos?|pieces?|szt)$/i, 'pcs', 1],
  [/^(box|boxes|bx)$/i, 'boxes', 1], [/^(case|cases|cs|ctn|ctns|carton|cartons)$/i, 'cases', 1],
  [/^(bag|bags)$/i, 'bags', 1], [/^(pack|packs|pk|pkt|pkts)$/i, 'packs', 1], [/^(tub|tubs)$/i, 'tubs', 1],
  [/^(tray|trays)$/i, 'trays', 1], [/^(portion|portions|ptn)$/i, 'portion', 1]
];
function unitOf(word) { for (const [re, unit, factor] of UNIT_WORDS) if (re.test(word)) return { unit, factor }; return null; }
const SKIP_LINE = /\b(invoice|inv no|vat|subtotal|sub total|total|balance|amount due|due date|payment|bank|sort code|account|acc no|iban|swift|tel|phone|mobile|email|e-mail|www\.|http|page \d|registered|company no|reg no|thank|delivery note|order no|po no|customer|ship to|bill to|invoice to|date|terms|discount|carriage|postcode|street|road|london|ltd|limited)\b/i;
const num = (s) => parseFloat(String(s).replace(/[£$€,](?=\d{3}\b)|[£$€]/g, '').replace(',', '.'));

/** Parse one text line. Returns null when it does not look like a product line. */
function parseInvoiceLine(raw) {
  let s = raw.replace(/[|_~=«»“”"]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (s.length < 3 || !/[a-z]{3,}/i.test(s) || !/\d/.test(s)) return null;
  if (SKIP_LINE.test(s) && !matchProduct(s).item) return null;
  // Tokenise numbers (with attached units / currency) and words.
  const tokens = s.split(' ').map((w) => {
    const m = w.match(/^([£$€]?)(\d+(?:[.,]\d+)?)([a-zA-Z]*)$/);
    if (m) return { w, n: num(m[2]), money: !!m[1] || /^\d+[.,]\d{2}$/.test(m[2]), unitTag: m[3] ? unitOf(m[3]) : null, attached: !!m[3] };
    return { w, n: null, unit: unitOf(w.replace(/[.:,]$/, '')) };
  });
  // Drop a leading product code such as "BB102" or "12345".
  if (tokens.length > 2 && /^(?=.*\d)[A-Z0-9-]{4,12}$/i.test(tokens[0].w) && tokens[1].n == null) tokens.shift();
  let qty = null, unit = null, price = null, nameTokens = [];
  // Form A: "2 x Burger Sauce …" / "16.15kg Chicken wings"
  if (tokens[0].n != null && !tokens[0].money && tokens.length > 1 && tokens.slice(1).some((t) => t.n == null && /[a-z]{3,}/i.test(t.w))) {
    qty = tokens[0].n; let k = 1;
    if (tokens[0].unitTag) { unit = tokens[0].unitTag.unit; qty *= tokens[0].unitTag.factor; }
    else if (tokens[1] && tokens[1].unit) { unit = tokens[1].unit.unit; qty *= tokens[1].unit.factor; k = 2; }
    const rest = tokens.slice(k);
    const lastMoney = rest.filter((t) => t.money);
    if (lastMoney.length) price = lastMoney[0].n;
    nameTokens = rest.filter((t) => t.n == null || (t.attached && !t.money)).map((t) => t.w);
  } else {
    // Form B: "Chicken wings 16.15 kg 3.20 51.68" — name first, then numbers.
    const firstNum = tokens.findIndex((t, i) => t.n != null && !(t.attached && tokens.slice(i + 1).some((x) => x.n != null)) );
    if (firstNum <= 0) return null;
    nameTokens = tokens.slice(0, firstNum).map((t) => t.w);
    const nums = tokens.slice(firstNum);
    const numbers = nums.filter((t) => t.n != null);
    if (!numbers.length) return null;
    const q = numbers.find((t) => !t.money) || numbers[0];
    qty = q.n;
    const qi = nums.indexOf(q);
    if (q.unitTag) { unit = q.unitTag.unit; qty *= q.unitTag.factor; }
    else if (nums[qi + 1] && nums[qi + 1].unit) { unit = nums[qi + 1].unit.unit; qty *= nums[qi + 1].unit.factor; }
    const after = numbers.slice(numbers.indexOf(q) + 1);
    if (after.length) price = after[0].n;
  }
  const name = nameTokens.join(' ').replace(/^[-–:.,\s]+|[-–:.,\s]+$/g, '').trim();
  if (!name || !/[a-z]{3,}/i.test(name) || !(qty > 0) || qty > 100000) return null;
  // Reject OCR noise: many tiny fragments or very long word salad with no product match.
  const words = name.split(/\s+/);
  const tiny = words.filter((w) => w.replace(/[^a-z]/gi, '').length <= 2).length;
  if ((tiny / words.length > 0.4 || words.length > 8) && !matchProduct(name).item) return null;
  return { raw, name, qty: Math.round(qty * 1000) / 1000, unit, price: price != null && price > 0 && price < 100000 ? price : null };
}
function detectSupplier(text) {
  const n = normText(text);
  let best = null, bestScore = 0;
  for (const s of DB.suppliers) {
    const words = normText(s.name).split(' ').filter((w) => w.length > 3 && !['and', 'kitchen', 'ltd', 'limited'].includes(w));
    if (!words.length) continue;
    const hit = words.filter((w) => n.includes(w)).length / words.length;
    if (hit > bestScore) { bestScore = hit; best = s; }
  }
  return bestScore >= 0.5 ? best.id : '';
}
function parseInvoiceText(text) {
  const lines = [];
  for (const raw of text.split(/\r?\n/)) {
    const p = parseInvoiceLine(raw);
    if (p) lines.push(p);
  }
  const inv = (text.match(/\binv(?:oice)?\.?\s*(?:no|number|num|#)?\.?\s*[:#]?\s*([A-Z0-9][A-Z0-9\-\/]{2,})/i) || [])[1] || '';
  let date = '';
  const dm = text.match(/\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})\b/);
  if (dm) {
    const d = +dm[1], m = +dm[2]; let y = +dm[3]; if (y < 100) y += 2000;
    if (d >= 1 && d <= 31 && m >= 1 && m <= 12 && y > 2000 && y < 2100) date = `${y}-${pad(m)}-${pad(d)}`;
  }
  return { lines, supplierId: detectSupplier(text), invoiceNo: /\d/.test(inv) ? inv : '', date };
}

/* ---------- Fuzzy product matching ---------- */
const SHORT_FORMS = {
  veg: 'vegan', vg: 'vegan', vgn: 'vegan', gf: 'gluten free', glutenfree: 'gluten free', sce: 'sauce', sc: 'sauce', sauces: 'sauce',
  pkl: 'pickle', pickles: 'pickle', pickled: 'pickle', bns: 'bun', buns: 'bun', brioche: 'bun', rolls: 'bun', roll: 'bun',
  ltr: 'l', litre: 'l', litres: 'l', cont: 'container', conts: 'container', containers: 'container', tub: 'container', tubs: 'container',
  choc: 'chocolate', mayo: 'mayo', mayonnaise: 'mayo', chili: 'chilli', chilly: 'chilli', bbq: 'bbq', barbecue: 'bbq', barbeque: 'bbq',
  cauliflower: 'cauli', macaroni: 'mac', croquette: 'cro', croquettes: 'cro', cheeks: 'cheek', onions: 'onion', frz: 'frozen', froz: 'frozen',
  sliced: 'sliced', slc: 'sliced', twarozek: 'twarog', 'twaróg': 'twarog', kraut: 'sauerkraut', rapeseed: 'oil', fryer: 'oil'
};
const STOP = new Set(['the', 'and', 'with', 'of', 'for', 'a', 'x', 'per', 'each', 'ea', 'pack', 'case', 'box', 'bag', 'kg', 'g', 'l', 'ml', 'pcs', 'fresh', 'house', 'homemade']);
function normText(s) {
  return String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}
function tokensOf(s) {
  const out = [];
  for (let w of normText(s).split(' ')) {
    if (!w) continue;
    if (/^\d+(l|kg|g|ml)$/.test(w)) { out.push(w); continue; } // keep pack sizes like 2l / 4l
    if (/\d/.test(w)) continue; // other numbers and codes (4 5in, 12x) say nothing about the product
    w = SHORT_FORMS[w] || w;
    for (let part of w.split(' ')) {
      if (part.length > 3 && part.endsWith('s') && !part.endsWith('ss')) part = part.slice(0, -1);
      if (!STOP.has(part)) out.push(part);
    }
  }
  return [...new Set(out)];
}
// Extra names people (and invoices) use for catalogue items.
const ITEM_ALIASES = {
  'bun-regular': ['brioche bun', 'burger bun', 'regular bun', 'bun'], 'bun-vegan': ['vegan bun', 'vegan brioche'],
  'bun-frozen': ['frozen bun'], 'bun-sliced': ['sliced bun'], 'bun-gf': ['gluten free bun', 'gf bun'],
  'oil-clean': ['rapeseed oil', 'fryer oil', 'vegetable oil', 'frying oil', 'oil'],
  'cont-2l': ['2l container', '2 litre container', '2l tub'], 'cont-4l': ['4l container', '4 litre container', '4l tub'],
  'gastro-deep': ['gastro', 'gn pan', 'gastronorm'], 'twarog': ['cottage cheese', 'twarog', 'quark'],
  'nacho-cheese': ['nacho cheese', 'cheese sauce'], 'green-curry-sauce': ['green curry'], 'truffle-mayo': ['truffle mayo'],
  'cauli-cro': ['cauliflower croquette'], 'mac-cro': ['mac cheese croquette', 'mac croquette'], 'bbq': ['bbq sauce']
};
function similarity(a, b) {
  const A = tokensOf(a), B = tokensOf(b);
  if (!A.length || !B.length) return 0;
  let hits = 0;
  for (const x of B) if (A.some((y) => y === x || (x.length > 4 && y.length > 4 && (y.startsWith(x.slice(0, 5)) || x.startsWith(y.slice(0, 5)))))) hits++;
  const recall = hits / B.length;                 // how much of the catalogue name is present
  const precision = hits / A.length;              // how much of the invoice text is explained
  // Character bigrams catch OCR typos (e.g. "Burqer Sauce").
  const bg = (s) => { const t = normText(s).replace(/ /g, ''); const m = new Map(); for (let i = 0; i < t.length - 1; i++) { const k = t.slice(i, i + 2); m.set(k, (m.get(k) || 0) + 1); } return m; };
  const ba = bg(a), bb = bg(b); let inter = 0, na = 0, nb = 0;
  ba.forEach((v, k) => { na += v; if (bb.has(k)) inter += Math.min(v, bb.get(k)); }); bb.forEach((v) => { nb += v; });
  const dice = na + nb ? (2 * inter) / (na + nb) : 0;
  return Math.max(recall * 0.75 + precision * 0.25, dice * 0.9);
}
/** Best catalogue match for free text. Returns { item, score } (item null if nothing is close). */
function matchProduct(text) {
  let best = null, bestScore = 0;
  for (const it of DB.catalog) {
    if (it.hidden) continue;
    const names = [it.name, iname(it), ...(ITEM_ALIASES[it.id] || [])];
    for (const n of names) {
      const sc = similarity(text, n) + (normText(text) === normText(n) ? 0.2 : 0);
      if (sc > bestScore) { bestScore = sc; best = it; }
    }
  }
  return bestScore >= 0.55 ? { item: best, score: Math.min(1, bestScore) } : { item: null, score: bestScore };
}


/* ===== src/07c-invoices.js ===== */

/* ---------- Invoices: scan / type in, review lines, compare with stock, optionally receive ---------- */
const INV_OCR = {}; // transient OCR state per invoice id: { stage, progress, error }
const OCR_STAGES = { prepare: tk('Preparing image…'), pdf: tk('Opening PDF…'), load: tk('Loading text reader (first time can take a minute)…'), read: tk('Reading invoice…') };
const findInvoice = (id) => DB.invoices.find((x) => x.id === id);
const currentInvoiceId = () => (location.hash.startsWith('#invoice/') ? decodeURIComponent(location.hash.slice(9)) : null);

/* Stock history (also used by manual stock changes). Newest last, capped. */
function logStock(locId, itemId, before, after, reason, ref) {
  const last = DB.stockLog[DB.stockLog.length - 1];
  const at = nowISO();
  // Merge rapid +/- taps on the same item into one entry.
  if (reason === 'adjust' && last && last.reason === 'adjust' && last.locId === locId && last.itemId === itemId && Date.now() - new Date(last.at) < 120000) {
    last.after = after; last.delta = Math.round(((after || 0) - (last.before || 0)) * 1000) / 1000; last.at = at; return last;
  }
  const entry = { id: uid('log'), at, locId, itemId, before, after, delta: Math.round(((after == null ? 0 : after) - (before == null ? 0 : before)) * 1000) / 1000, reason, ref: ref || null };
  DB.stockLog.push(entry);
  if (DB.stockLog.length > 1000) DB.stockLog.splice(0, DB.stockLog.length - 1000);
  return entry;
}
const LOG_REASONS = { adjust: tk('Quick adjust'), count: tk('Counted'), uncount: tk('Marked as not counted'), invoice: tk('Received from invoice'), undo: tk('Undone') };
function stockHistoryHtml(locId, itemId, limit = 5) {
  const it = itemById(itemId);
  const rows = DB.stockLog.filter((l) => l.locId === locId && l.itemId === itemId).slice(-limit).reverse();
  if (!rows.length) return '';
  return `<div class="label" style="margin-top:16px">${esc(t('Recent changes'))}</div><ul class="history">${rows.map((l) => `<li><span>${esc(t(LOG_REASONS[l.reason] || l.reason))}${l.after != null ? ` · ${l.delta > 0 ? '+' : ''}${esc(fmtQty(l.delta))} → ${esc(fmtQty(l.after))} ${esc(U(it ? it.unit : ''))}` : ''}</span><span>${esc(fmtWhen(l.at))}</span></li>`).join('')}</ul>`;
}

/* ---------- Entry points ---------- */
function ensureFileInputs() {
  if ($('#inv-cam')) return;
  document.body.insertAdjacentHTML('beforeend', `<input type="file" id="inv-cam" accept="image/*" capture="environment" hidden>
    <input type="file" id="inv-file" accept="image/*,application/pdf,.pdf" hidden>`);
  for (const id of ['inv-cam', 'inv-file']) $('#' + id).addEventListener('change', (e) => { const f = e.target.files && e.target.files[0]; e.target.value = ''; if (f) startScan(f); });
}
function scanChooser() {
  ensureFileInputs();
  openSheet({
    title: t('Scan invoice'),
    body: `<p class="muted" style="margin:0 0 14px">${esc(t('Take a photo or upload the invoice. You check every line before anything touches stock.'))}</p>
      <div class="inv-start">
        <button class="btn primary" data-act="inv-camera">${icon('camera')}<span>${esc(t('Take photo'))}<small>${esc(t('Rear camera, invoice flat and well lit'))}</small></span></button>
        <button class="btn" data-act="inv-upload">${icon('upload')}<span>${esc(t('Upload photo or PDF'))}<small>${esc(t('From gallery or files, up to {n} PDF pages', { n: OCR_MAX_PAGES }))}</small></span></button>
        <button class="btn" data-act="inv-manual">${icon('edit')}<span>${esc(t('Type it in by hand'))}<small>${esc(t('No photo needed'))}</small></span></button>
      </div>
      <button class="btn ghost block" style="margin-top:12px" data-act="go" data-tab="invoices">${esc(t('Invoice history'))} (${DB.invoices.length})</button>`
  });
}
function newInvoice(source) {
  const ts = nowISO();
  const loc = UI.stock && UI.stock.loc && UI.stock.loc !== 'all' && locById(UI.stock.loc) ? UI.stock.loc : (visibleLocations()[0] || {}).id || 'all';
  return { id: uid('inv'), createdAt: ts, updatedAt: ts, source, supplierId: '', invoiceNo: '', invoiceDate: dayKey(), locationId: loc,
    lines: [], ocr: null, hasImage: false, pageCount: 0, skippedPages: 0, comparison: null, received: null };
}
const blankLine = () => ({ id: uid('il'), raw: '', name: '', itemId: null, qty: null, unit: 'pcs', price: null, score: null, auto: false });
function startManual() {
  const inv = newInvoice('manual'); inv.lines = [blankLine()];
  commit((db) => db.invoices.push(inv), { render: false });
  closeSheet(true); go('invoice/' + inv.id);
}
async function startScan(file) {
  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name || '');
  if (!isPdf && !/^image\//.test(file.type || '')) return toast(t('Choose a photo or a PDF file.'), { error: true });
  if (file.size > 40 * 1024 * 1024) return toast(t('That file is too large (over 40 MB).'), { error: true });
  const inv = newInvoice(isPdf ? 'pdf' : 'photo');
  commit((db) => db.invoices.push(inv), { render: false });
  closeSheet(true);
  INV_OCR[inv.id] = { stage: 'prepare', progress: 0 };
  go('invoice/' + inv.id);
  await readInvoiceFile(inv, () => filePages(file, (stage, p) => ocrStep(inv.id, stage, p)));
}
function ocrStep(id, stage, progress) {
  INV_OCR[id] = { stage, progress: Math.max(0, Math.min(1, progress || 0)) };
  const bar = $('#ocr-progress');
  if (bar && currentInvoiceId() === id) {
    $('.ocr-text', bar).textContent = `${t(OCR_STAGES[stage] || OCR_STAGES.read)} ${Math.round(INV_OCR[id].progress * 100)}%`;
    $('.ocr-bar > span', bar).style.width = Math.round(INV_OCR[id].progress * 100) + '%';
  }
}
/** Shared by first scan and "rotate & read again". getPages() resolves to filePages()-like result. */
async function readInvoiceFile(inv, getPages, { keepImages = false } = {}) {
  try {
    const { pages, totalPages } = await getPages();
    const res = await runInvoiceOcr(pages, (stage, p) => ocrStep(inv.id, stage, p));
    if (!keepImages || pages.some((p) => p.rotated)) {
      try {
        const thumb = await canvasBlob(scaledCopy(pages[0].canvas, 240), 0.6);
        const blobs = []; for (const p of pages) blobs.push(await canvasBlob(scaledCopy(p.canvas, 1600), 0.72));
        await scanPut({ id: inv.id, thumb, pages: blobs });
        inv.hasImage = true;
      } catch (e) { console.warn('Image not stored', e); inv.hasImage = false; }
      inv.pageCount = pages.length; inv.skippedPages = Math.max(0, totalPages - pages.length);
    }
    applyOcr(inv, res);
    delete INV_OCR[inv.id];
  } catch (e) {
    console.warn('Invoice reading failed', e);
    INV_OCR[inv.id] = { error: true };
    inv.ocr = { error: true, at: nowISO() };
    if (!inv.lines.length) inv.lines = [blankLine()];
  }
  inv.updatedAt = nowISO();
  save();
  if (DB.invoices.includes(inv) && (currentInvoiceId() === inv.id || UI.tab === 'invoices')) render();
}
function applyOcr(inv, res) {
  const parsed = parseInvoiceText(res.text);
  inv.lines = parsed.lines.map((p) => {
    const m = matchProduct(p.name);
    return { id: uid('il'), raw: p.raw, name: m.item ? m.item.name : p.name, itemId: m.item ? m.item.id : null, qty: p.qty,
      unit: p.unit || (m.item ? m.item.unit : 'pcs'), price: p.price, score: Math.round(m.score * 100), auto: !!m.item };
  });
  if (!inv.lines.length) inv.lines = [blankLine()];
  if (parsed.supplierId) inv.supplierId = parsed.supplierId;
  if (parsed.invoiceNo) inv.invoiceNo = parsed.invoiceNo;
  if (parsed.date) inv.invoiceDate = parsed.date;
  inv.comparison = null;
  inv.ocr = { at: nowISO(), confidence: res.confidence, usedOcr: res.usedOcr, langs: res.langs, found: parsed.lines.length,
    messy: !parsed.lines.length || (res.usedOcr && res.confidence < 70), text: res.text.slice(0, 6000) };
}

/* ---------- History view (#invoices) ---------- */
function invoiceTitle(inv) { return inv.supplierId ? supName(inv.supplierId) : t('Supplier not set'); }
function renderInvoices() {
  ensureFileInputs();
  const list = DB.invoices.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const back = UI.invoiceFrom || 'stock';
  const cards = list.map((inv) => {
    const busy = INV_OCR[inv.id] && !INV_OCR[inv.id].error;
    return `<button class="card inv-card" data-act="inv-open" data-id="${esc(inv.id)}">
      <span class="inv-thumb" ${inv.hasImage ? `data-thumb="${esc(inv.id)}"` : ''}>${inv.hasImage ? '' : icon('edit')}</span>
      <span class="inv-card-body"><span class="card-title">${esc(invoiceTitle(inv))}${inv.invoiceNo ? ' · ' + esc(inv.invoiceNo) : ''}</span>
        <span class="card-meta"><span>${esc(inv.invoiceDate ? fmtDay(inv.invoiceDate) : fmtWhen(inv.createdAt))}</span><span>${esc(tp(inv.lines.filter((l) => l.name || l.itemId).length, 'line'))}</span></span>
        <span class="card-meta">${busy ? `<span class="badge s-progress">${esc(t('Reading…'))}</span>` : inv.received ? `<span class="badge s-ready">${esc(t('Received into {place}', { place: locName(inv.received.locationId) }))}</span>` : `<span class="badge s-requested">${esc(t('Not received'))}</span>`}
          ${inv.comparison ? `<span>${esc(t('Compared {when}', { when: fmtWhen(inv.comparison.at) }))}</span>` : ''}</span></span>
    </button>`;
  }).join('');
  return `<div class="page-head"><button class="icon-btn" data-act="go" data-tab="${esc(back)}" aria-label="${esc(t('Back'))}">${icon('back')}</button><h2 style="flex:1">${esc(t('Invoices'))}</h2></div>
    <div class="inv-start inv-start-row">
      <button class="btn primary" data-act="inv-camera">${icon('camera')}<span>${esc(t('Take photo'))}</span></button>
      <button class="btn" data-act="inv-upload">${icon('upload')}<span>${esc(t('Upload photo or PDF'))}</span></button>
      <button class="btn" data-act="inv-manual">${icon('edit')}<span>${esc(t('Type it in by hand'))}</span></button>
    </div>
    <div class="section"><h3>${esc(t('Saved invoices'))}</h3><span class="count">${list.length}</span></div>
    ${cards || emptyBox(t('No invoices yet'), t('Scan or type in a delivery invoice to compare it with stock. Nothing is added to stock unless you confirm.'))}
    <p class="hint" style="margin-top:14px">${esc(t('Photos are kept only on this device and are not included in backups.'))}</p>`;
}

/* ---------- Editor view (#invoice/<id>) ---------- */
function invLineRow(l, idx) {
  const known = l.itemId && itemById(l.itemId);
  const isCustom = !known;
  const options = [`<option value="__custom"${isCustom ? ' selected' : ''}>${esc(t('Custom item (not in stock list)'))}</option>`];
  for (const cat of CATEGORIES) {
    const items = DB.catalog.filter((c) => c.category === cat && (!c.hidden || c.id === l.itemId));
    if (items.length) options.push(`<optgroup label="${esc(catName(cat))}">${items.map((c) => opt(c.id, `${iname(c)} (${U(c.unit)})`, c.id === l.itemId)).join('')}</optgroup>`);
  }
  const unitMismatch = known && l.unit && l.unit !== known.unit;
  const hint = known
    ? (l.auto ? `<span class="badge s-ready">${esc(t('Matched {pct}%', { pct: l.score || 0 }))}</span> <span>${esc(t('Check the match'))}</span>` : `<span class="badge s-ready">${esc(t('In stock list'))}</span>`)
    : `<span class="badge s-requested">${esc(t('Custom'))}</span> <span>${esc(t('Not linked to stock. Pick a product or add it to items.'))}</span>`;
  return `<div class="line inv-line" data-iline="${esc(l.id)}">
    ${l.raw ? `<p class="inv-raw"><span class="sr">${esc(t('Read as'))}: </span>“${esc(l.raw)}”</p>` : ''}
    <div class="line-top">
      <label class="sr" for="il-${idx}">${esc(t('Product for line {n}', { n: idx + 1 }))}</label>
      <select id="il-${idx}" data-f="item">${options.join('')}</select>
      <button type="button" class="line-del" data-act="inv-line-del" aria-label="${esc(t('Remove line {n}', { n: idx + 1 }))}">${icon('trash')}</button>
    </div>
    <div class="custom" ${isCustom ? '' : 'hidden'}><label class="sr" for="ic-${idx}">${esc(t('Name on invoice'))}</label>
      <input type="text" id="ic-${idx}" data-f="custom" placeholder="${esc(t('Name on invoice'))}" value="${esc(isCustom ? l.name : '')}" maxlength="80"></div>
    <div class="inv-qty">
      <label><span class="mini-label">${esc(t('Qty'))}</span><input type="text" inputmode="decimal" data-f="qty" value="${l.qty != null ? esc(String(l.qty)) : ''}" placeholder="0" aria-label="${esc(t('Quantity'))}"></label>
      <label><span class="mini-label">${esc(t('Unit'))}</span><select data-f="unit" aria-label="${esc(t('Unit'))}">${unitOptions(l.unit || (known ? known.unit : 'pcs'))}</select></label>
      <label><span class="mini-label">${esc(t('Price £ (optional)'))}</span><input type="text" inputmode="decimal" data-f="price" value="${l.price != null ? esc(String(l.price)) : ''}" placeholder="—" aria-label="${esc(t('Price £ (optional)'))}"></label>
    </div>
    <div class="inv-hint">${hint}${unitMismatch ? ` <span class="badge s-low">${esc(t('Unit differs from stock ({unit})', { unit: U(known.unit) }))}</span>` : ''}
      ${isCustom && norm(l.name) ? `<button type="button" class="btn sm ghost" data-act="inv-add-item" data-line="${esc(l.id)}">${icon('plus')} ${esc(t('Add to items'))}</button>` : ''}</div>
  </div>`;
}
function ocrBanner(inv) {
  const st = INV_OCR[inv.id];
  if (st && !st.error) {
    const pct = Math.round((st.progress || 0) * 100);
    return `<div class="inv-banner" id="ocr-progress" role="status"><p class="ocr-text">${esc(t(OCR_STAGES[st.stage] || OCR_STAGES.read))} ${pct}%</p>
      <div class="ocr-bar"><span style="width:${pct}%"></span></div><p class="small muted" style="margin:6px 0 0">${esc(t('You can type lines in meanwhile; they are replaced when reading finishes.'))}</p></div>`;
  }
  const out = [];
  if (inv.ocr && inv.ocr.error) out.push(`<div class="inv-banner warn" role="alert"><b>⚠ ${esc(t('Could not read this file.'))}</b> ${esc(t('Type the lines in by hand below. If you are offline, the text reader must be opened once online first.'))}</div>`);
  else if (inv.ocr && inv.ocr.messy) out.push(`<div class="inv-banner warn" role="alert"><b>⚠ ${esc(inv.ocr.found ? t('Low reading confidence ({pct}%).', { pct: inv.ocr.confidence }) : t('No product lines found.'))}</b> ${esc(t('Check every line against the paper invoice and fix or add lines.'))}</div>`);
  else if (inv.ocr) out.push(`<div class="inv-banner ok" role="status">${esc(inv.ocr.usedOcr ? t('Read {n} lines ({pct}% confidence). Check them against the invoice.', { n: inv.ocr.found, pct: inv.ocr.confidence }) : t('Read {n} lines from the PDF text. Check them against the invoice.', { n: inv.ocr.found }))}</div>`);
  if (inv.skippedPages) out.push(`<div class="inv-banner warn" role="status">${esc(t('Only the first {n} pages were read; {m} more were skipped. Add their lines by hand.', { n: inv.pageCount, m: inv.skippedPages }))}</div>`);
  return out.join('');
}
function renderInvoice() {
  const inv = findInvoice(currentInvoiceId());
  if (!inv) return emptyBox(t('Invoice not found'), t('It may have been deleted.'), `<button class="btn" data-act="go" data-tab="invoices">${esc(t('Invoice history'))}</button>`);
  const busy = INV_OCR[inv.id] && !INV_OCR[inv.id].error;
  const locOpts = opt('all', t('All locations'), inv.locationId === 'all') + DB.locations.filter((l) => !l.hidden || l.id === inv.locationId).map((l) => opt(l.id, locName(l.id), l.id === inv.locationId)).join('');
  const preview = inv.hasImage
    ? `<div class="inv-pages">${Array.from({ length: inv.pageCount || 1 }, (_, i) => `<button class="inv-page" data-act="inv-view" data-page="${i}" aria-label="${esc(t('View page {n} full size', { n: i + 1 }))}"><img alt="${esc(t('Invoice page {n}', { n: i + 1 }))}" data-page-img="${esc(inv.id)}" data-page-n="${i}"></button>`).join('')}</div>
       <div class="btn-row" style="margin-top:8px">${busy ? '' : `<button class="btn sm" data-act="inv-rotate">${esc(t('Rotate & read again'))}</button>`}
         ${inv.ocr && inv.ocr.text ? `<button class="btn sm ghost" data-act="inv-text">${esc(t('Show recognised text'))}</button>` : ''}</div>`
    : `<div class="inv-noimg">${icon('edit')}<p>${esc(inv.source === 'manual' ? t('Typed in by hand — no photo.') : t('No image stored for this invoice.'))}</p></div>`;
  return `<div class="page-head"><button class="icon-btn" data-act="go" data-tab="invoices" aria-label="${esc(t('Back'))}">${icon('back')}</button>
      <h2 style="flex:1">${esc(t('Invoice'))}</h2>
      <button class="icon-btn" data-act="inv-delete" data-id="${esc(inv.id)}" aria-label="${esc(t('Delete invoice'))}">${icon('trash')}</button></div>
    ${ocrBanner(inv)}
    <div class="inv-layout">
      <section class="inv-preview" aria-label="${esc(t('Invoice image'))}">${preview}</section>
      <form id="inv-form" class="inv-form" novalidate>
        <label class="field"><span>${esc(t('Supplier'))}</span><select name="supplier"><option value="">${esc(t('Not sure / other'))}</option>${supplierOptions(inv.supplierId, { includeHiddenId: inv.supplierId })}</select></label>
        <div class="row2">
          <label class="field"><span>${esc(t('Invoice number'))}</span><input type="text" name="invoiceNo" value="${esc(inv.invoiceNo)}" maxlength="40" autocomplete="off"></label>
          <label class="field"><span>${esc(t('Invoice date'))}</span><input type="date" name="invoiceDate" value="${esc(inv.invoiceDate || '')}"></label>
        </div>
        <label class="field"><span>${esc(t('Compare with stock at'))}</span><select name="location">${locOpts}</select></label>
        <div class="label">${esc(t('Lines'))}</div>
        <div class="lines" data-ilines>${inv.lines.map(invLineRow).join('')}</div>
        <button type="button" class="btn sm ghost block" data-act="inv-line-add">${icon('plus')} ${esc(t('Add line'))}</button>
        <div style="height:14px"></div>
        <button type="submit" class="btn primary block" ${busy ? 'disabled' : ''}>${esc(t('Compare with stock'))}</button>
      </form>
    </div>
    <section id="inv-compare" aria-live="polite">${inv.comparison ? comparisonHtml(inv) : ''}</section>`;
}

/* Read the editor. strict=true validates (for compare); otherwise saves whatever is there. */
function readInvoiceForm(inv, strict) {
  const form = $('#inv-form'); if (!form) return true;
  if (strict) clearErrors(form);
  let ok = true;
  inv.supplierId = form.supplier.value; inv.invoiceNo = norm(form.invoiceNo.value); inv.invoiceDate = form.invoiceDate.value; inv.locationId = form.location.value;
  const lines = [];
  for (const row of $$('[data-iline]', form)) {
    const prev = inv.lines.find((l) => l.id === row.dataset.iline) || blankLine();
    const sel = $('[data-f="item"]', row), customEl = $('[data-f="custom"]', row), qtyEl = $('[data-f="qty"]', row), priceEl = $('[data-f="price"]', row);
    const it = sel.value !== '__custom' ? itemById(sel.value) : null;
    const name = it ? it.name : norm(customEl.value);
    const qty = qtyEl.value.trim() === '' ? null : parseQty(qtyEl.value);
    const price = priceEl.value.trim() === '' ? null : parseQty(priceEl.value.replace(/^£/, ''));
    const blank = !name && qtyEl.value.trim() === '';
    if (strict && blank && $$('[data-iline]', form).length > 1) continue;
    if (strict) {
      if (!name) ok = fieldError(customEl.closest('.custom').hidden ? sel : customEl, t('Choose a product or type the name.'));
      if (!(qty > 0)) ok = fieldError(qtyEl, t('Enter a quantity above 0, e.g. 8 or 2.5.'));
      if (priceEl.value.trim() !== '' && Number.isNaN(price)) ok = fieldError(priceEl, t('Price must be a number, e.g. 12.50, or empty.'));
    }
    const changedItem = (it ? it.id : null) !== prev.itemId;
    lines.push({ ...prev, itemId: it ? it.id : null, name, qty: Number.isNaN(qty) ? null : qty, unit: $('[data-f="unit"]', row).value,
      price: Number.isNaN(price) ? null : price, auto: changedItem ? false : prev.auto });
  }
  inv.lines = lines;
  if (strict && !lines.some((l) => l.name)) { ok = false; toast(t('Add at least one line.'), { error: true }); }
  inv.updatedAt = nowISO();
  return ok;
}
let invSaveTimer = null;
function autosaveInvoice() {
  clearTimeout(invSaveTimer);
  invSaveTimer = setTimeout(() => { const inv = findInvoice(currentInvoiceId()); if (inv && $('#inv-form')) { readInvoiceForm(inv, false); save(); } }, 350);
}
function bindInvoiceEditor() {
  const form = $('#inv-form'); if (!form || form.dataset.bound) return;
  form.dataset.bound = '1';
  form.addEventListener('input', autosaveInvoice);
  form.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-f="item"]');
    if (sel) {
      const row = sel.closest('[data-iline]');
      const it = itemById(sel.value);
      $('.custom', row).hidden = !!it;
      if (it) $('[data-f="unit"]', row).innerHTML = unitOptions(it.unit);
      else $('[data-f="custom"]', row).focus();
      const inv = findInvoice(currentInvoiceId());
      if (inv) { readInvoiceForm(inv, false); save(); const l = inv.lines.find((x) => x.id === row.dataset.iline); if (l) row.outerHTML = invLineRow(l, $$('[data-iline]', form).indexOf(row)); }
      return;
    }
    autosaveInvoice();
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); compareInvoice(); });
}

/* ---------- Compare ---------- */
function computeComparison(inv) {
  const single = inv.locationId !== 'all' ? inv.locationId : null;
  const added = {}; // running additions per item so repeated lines stack up
  const rows = inv.lines.filter((l) => l.name && l.qty > 0).map((l) => {
    const it = l.itemId && itemById(l.itemId);
    const row = { lineId: l.id, name: it ? iname(it) : l.name, itemId: it ? it.id : null, unit: l.unit, qty: l.qty };
    if (!it) return { ...row, kind: 'custom' };
    if (l.unit !== it.unit) return { ...row, kind: 'unit', stockUnit: it.unit };
    if (single) {
      const e = stockEntry(single, it.id); const th = thresholdFor(single, it.id);
      const onHand = e ? e.qty : null;
      const base = (onHand || 0) + (added[it.id] || 0);
      added[it.id] = (added[it.id] || 0) + l.qty;
      const after = Math.round((base + l.qty) * 1000) / 1000;
      return { ...row, kind: 'ok', onHand, threshold: th, counted: !!e, out: !!e && onHand <= 0, low: !!e && onHand <= th, after, lowAfter: after <= th,
        diff: onHand == null ? null : Math.round((l.qty - onHand) * 1000) / 1000 };
    }
    const per = visibleLocations().map((loc) => ({ locId: loc.id, e: stockEntry(loc.id, it.id), th: thresholdFor(loc.id, it.id) })).filter((x) => x.e);
    const onHand = per.length ? Math.round(per.reduce((a, x) => a + x.e.qty, 0) * 1000) / 1000 : null;
    return { ...row, kind: 'ok', onHand, counted: per.length > 0, perLoc: per.map((x) => ({ locId: x.locId, qty: x.e.qty, low: x.e.qty <= x.th, out: x.e.qty <= 0 })),
      low: per.some((x) => x.e.qty <= x.th), out: per.some((x) => x.e.qty <= 0), diff: onHand == null ? null : Math.round((l.qty - onHand) * 1000) / 1000 };
  });
  return { at: nowISO(), locationId: inv.locationId, rows };
}
function compareInvoice() {
  const inv = findInvoice(currentInvoiceId()); if (!inv) return;
  if (!readInvoiceForm(inv, true)) { save(); const first = $('.invalid'); if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
  inv.comparison = computeComparison(inv);
  save();
  $('#inv-compare').innerHTML = comparisonHtml(inv);
  $('#inv-compare').scrollIntoView({ block: 'start', behavior: 'smooth' });
}
const qtyU = (n, u) => `${fmtQty(n)} ${U(u)}`;
function comparisonHtml(inv) {
  const c = inv.comparison; if (!c) return '';
  const single = c.locationId !== 'all';
  const counts = { ok: 0, custom: 0, unit: 0, low: 0, out: 0, uncounted: 0 };
  c.rows.forEach((r) => { if (r.kind !== 'ok') counts[r.kind]++; else { counts.ok++; if (r.out) counts.out++; else if (r.low) counts.low++; if (!r.counted) counts.uncounted++; } });
  const rows = c.rows.map((r) => {
    const badges = [];
    if (r.kind === 'custom') badges.push(`<span class="badge s-requested">${esc(t('Custom — not in stock list'))}</span>`);
    else if (r.kind === 'unit') badges.push(`<span class="badge s-low">${esc(t('Unit differs: invoice {a}, stock {b}', { a: U(r.unit), b: U(r.stockUnit) }))}</span>`);
    else {
      if (!r.counted) badges.push(`<span class="badge s-requested">${esc(t('Not counted'))}</span>`);
      else if (r.out) badges.push(`<span class="badge s-problem">${esc(t('Out of stock now'))}</span>`);
      else if (r.low) badges.push(`<span class="badge s-low">${esc(single ? t('Low now (alert at {n})', { n: fmtQty(r.threshold) }) : t('Low somewhere'))}</span>`);
      else badges.push(`<span class="badge s-ready">${esc(t('Stock OK'))}</span>`);
      if (single && (r.low || !r.counted) && !r.lowAfter) badges.push(`<span class="badge s-ready">${esc(t('OK after receiving'))}</span>`);
      if (single && r.lowAfter) badges.push(`<span class="badge s-low">${esc(t('Still low after receiving'))}</span>`);
    }
    const diffText = r.diff == null ? '—' : r.diff === 0 ? t('Same as on hand') : r.diff > 0 ? t('{n} more than on hand', { n: qtyU(r.diff, r.unit) }) : t('{n} less than on hand', { n: qtyU(-r.diff, r.unit) });
    const cells = r.kind === 'ok' ? `<dl class="cmp-grid">
        <div><dt>${esc(t('On invoice'))}</dt><dd>+${esc(qtyU(r.qty, r.unit))}</dd></div>
        <div><dt>${esc(single ? t('On hand now') : t('On hand (all locations)'))}</dt><dd>${r.onHand == null ? esc(t('Not counted')) : esc(qtyU(r.onHand, r.unit))}</dd></div>
        <div><dt>${esc(t('Difference'))}</dt><dd>${esc(diffText)}</dd></div>
        ${single ? `<div><dt>${esc(t('After receiving'))}</dt><dd>${esc(qtyU(r.after, r.unit))}</dd></div>` : ''}
      </dl>${!single && r.perLoc && r.perLoc.length ? `<p class="small muted" style="margin:8px 0 0">${r.perLoc.map((p) => `${esc(locName(p.locId))}: ${esc(qtyU(p.qty, r.unit))}${p.out ? ' (' + esc(t('out')) + ')' : p.low ? ' (' + esc(t('low')) + ')' : ''}`).join(' · ')}</p>` : ''}`
      : `<dl class="cmp-grid"><div><dt>${esc(t('On invoice'))}</dt><dd>${esc(qtyU(r.qty, r.unit))}</dd></div><div><dt>${esc(t('Stock'))}</dt><dd>${esc(r.kind === 'custom' ? t('Not tracked') : t('Fix the unit to compare'))}</dd></div></dl>`;
    return `<article class="card cmp-row${r.kind !== 'ok' ? ' is-done' : r.out ? ' is-problem' : r.low ? ' cmp-low' : ''}"><div class="card-head"><p class="card-title">${esc(r.name)}</p></div>
      <div class="card-meta" style="margin:6px 0 4px">${badges.join('')}</div>${cells}</article>`;
  }).join('');
  const receivable = c.rows.filter((r) => r.kind === 'ok');
  let action;
  if (inv.received) action = `<div class="inv-banner ok" role="status">✓ ${esc(t('Received into {place} stock {when}.', { place: locName(inv.received.locationId), when: fmtWhen(inv.received.at) }))}</div>`;
  else if (!single) action = `<button class="btn block" disabled>${esc(t('Receive into stock'))}</button><p class="hint" style="margin-top:8px">${esc(t('Choose one location above to receive this invoice into its stock.'))}</p>`;
  else if (!receivable.length) action = `<p class="hint">${esc(t('No lines can be added to stock: link them to products with matching units first.'))}</p>`;
  else action = `<button class="btn primary block" data-act="inv-receive">${esc(t('Receive into stock at {place}', { place: locName(c.locationId) }))}</button>
    <p class="hint" style="margin-top:8px">${esc(t('Optional. Adds the invoice quantities to stock after you confirm. Nothing changes until then.'))}</p>`;
  const summary = [
    t('{n} linked to stock', { n: counts.ok }),
    counts.out ? t('{n} out of stock', { n: counts.out }) : '', counts.low ? t('{n} low', { n: counts.low }) : '',
    counts.uncounted ? t('{n} not counted', { n: counts.uncounted }) : '', counts.custom ? t('{n} custom', { n: counts.custom }) : '', counts.unit ? t('{n} unit mismatch', { n: counts.unit }) : ''
  ].filter(Boolean).join(' · ');
  const stale = inv.updatedAt && new Date(inv.updatedAt) > new Date(c.at) ? `<p class="small s-low" style="font-weight:700">⚠ ${esc(t('Lines changed since this comparison. Compare again.'))}</p>` : '';
  return `<div class="section"><h3>${esc(t('Comparison with stock'))}</h3><span class="count">${esc(single ? locName(c.locationId) : t('All locations'))} · ${esc(fmtWhen(c.at))}</span></div>
    <p class="muted small" style="margin:0 0 10px">${esc(summary)}</p>${stale}<div class="cmp-rows">${rows}</div><div class="cmp-action">${action}</div>`;
}

/* ---------- Receive into stock (optional, confirmed, undoable) ---------- */
async function receiveInvoice() {
  const inv = findInvoice(currentInvoiceId()); if (!inv || inv.received) return;
  if (!readInvoiceForm(inv, true)) return;
  inv.comparison = computeComparison(inv);
  const loc = inv.locationId;
  if (loc === 'all') return toast(t('Choose one location first.'), { error: true });
  const sums = {};
  for (const r of inv.comparison.rows) if (r.kind === 'ok') sums[r.itemId] = Math.round(((sums[r.itemId] || 0) + r.qty) * 1000) / 1000;
  const ids = Object.keys(sums);
  const skipped = inv.comparison.rows.length - inv.comparison.rows.filter((r) => r.kind === 'ok').length;
  if (!ids.length) return toast(t('No lines can be added to stock.'), { error: true });
  const ok = await confirmDialog({
    title: t('Receive into {place} stock?', { place: locName(loc) }),
    message: ids.map((id) => `${iname(itemById(id))} +${qtyU(sums[id], itemById(id).unit)}`).join(', ') + (skipped ? ' · ' + t('{n} lines skipped (custom or unit differs).', { n: skipped }) : ''),
    ok: t('Add to stock')
  });
  if (!ok) { toast(t('Nothing was added to stock.')); return; }
  const at = nowISO(), changes = [];
  DB.stock[loc] = DB.stock[loc] || {};
  for (const id of ids) {
    const e = DB.stock[loc][id];
    const before = e ? e.qty : null;
    const after = Math.round(((before || 0) + sums[id]) * 1000) / 1000;
    DB.stock[loc][id] = { ...(e || {}), qty: after, updatedAt: at };
    delete DB.stock[loc][id].sample;
    const log = logStock(loc, id, before, after, 'invoice', inv.id);
    changes.push({ itemId: id, before, after, delta: sums[id], logId: log.id, hadEntry: !!e, prevEntry: e ? { ...e } : null });
  }
  inv.received = { at, locationId: loc, changes };
  inv.comparison = computeComparison(inv); inv.comparison.at = at;
  inv.updatedAt = at;
  save(); render();
  toast(t('Added {n} items to {place} stock', { n: ids.length, place: locName(loc) }), { action: t('Undo'), onAction: () => undoReceive(inv.id) });
}
function undoReceive(id) {
  const inv = findInvoice(id); if (!inv || !inv.received) return;
  const { locationId: loc, changes } = inv.received;
  let skipped = 0;
  for (const ch of changes) {
    const e = stockEntry(loc, ch.itemId);
    if (!e || e.qty !== ch.after) { skipped++; continue; } // counted again since; leave it alone
    if (ch.hadEntry) DB.stock[loc][ch.itemId] = ch.prevEntry; else delete DB.stock[loc][ch.itemId];
    DB.stockLog = DB.stockLog.filter((l) => l.id !== ch.logId);
  }
  inv.received = null; inv.comparison = computeComparison(inv); inv.updatedAt = nowISO();
  save(); render();
  toast(skipped ? t('Undone, except {n} items counted again since.', { n: skipped }) : t('Receiving undone'));
}

/* ---------- Other actions ---------- */
async function deleteInvoice(id) {
  const inv = findInvoice(id); if (!inv) return;
  const ok = await confirmDialog({ title: t('Delete this invoice?'), message: inv.received ? t('Stock already received from it stays as it is. The photo is deleted too.') : t('The lines and photo are deleted from this device.'), ok: t('Delete'), danger: true });
  if (!ok) return;
  const idx = DB.invoices.indexOf(inv);
  commit((db) => db.invoices.splice(idx, 1), { render: false });
  if (currentInvoiceId() === id) go('invoices'); else render();
  // The photo is removed once the Undo window has passed.
  const timer = setTimeout(() => { if (!findInvoice(id)) scanDelete(id); }, 8000);
  toast(t('Invoice deleted'), { action: t('Undo'), onAction: () => { clearTimeout(timer); commit((db) => db.invoices.splice(Math.min(idx, db.invoices.length), 0, inv)); } });
}
async function rotateAndReread() {
  const inv = findInvoice(currentInvoiceId()); if (!inv || !inv.hasImage) return;
  if (inv.lines.some((l) => l.name) && !(await confirmDialog({ title: t('Read again?'), message: t('The image is turned a quarter and read again. Current lines are replaced.'), ok: t('Rotate & read') }))) return;
  const rec = await scanGet(inv.id);
  if (!rec || !rec.pages || !rec.pages.length) return toast(t('The photo is no longer stored.'), { error: true });
  INV_OCR[inv.id] = { stage: 'prepare', progress: 0 }; render();
  await readInvoiceFile(inv, async () => {
    const pages = [];
    for (const b of rec.pages) pages.push({ canvas: rotateCanvas(await fileToCanvas(b), 1), text: null });
    const thumb = await canvasBlob(scaledCopy(pages[0].canvas, 240), 0.6);
    const blobs = []; for (const p of pages) blobs.push(await canvasBlob(scaledCopy(p.canvas, 1600), 0.72));
    await scanPut({ id: inv.id, thumb, pages: blobs });
    return { pages, totalPages: pages.length + (inv.skippedPages || 0) };
  }, { keepImages: true });
}
async function viewInvoicePage(n) {
  const inv = findInvoice(currentInvoiceId()); if (!inv) return;
  const rec = await scanGet(inv.id); if (!rec || !rec.pages) return toast(t('The photo is no longer stored.'), { error: true });
  const urls = rec.pages.map((b) => URL.createObjectURL(b));
  openSheet({ title: t('Invoice'), body: urls.map((u, i) => `<img class="inv-full" src="${u}" alt="${esc(t('Invoice page {n}', { n: i + 1 }))}" ${i === n ? 'id="inv-full-target"' : ''}>`).join(''),
    onMount: (sheet) => { const tg = $('#inv-full-target', sheet); if (tg) setTimeout(() => tg.scrollIntoView(), 50); },
    onClose: () => urls.forEach((u) => URL.revokeObjectURL(u)) });
}
function showRecognisedText() {
  const inv = findInvoice(currentInvoiceId()); if (!inv || !inv.ocr || !inv.ocr.text) return;
  openSheet({ title: t('Recognised text'), body: `<p class="hint">${esc(t('Raw text from the reader, for checking. Edit the lines, not this.'))}</p><pre class="inv-text">${esc(inv.ocr.text)}</pre>` });
}
function addLineAsItem(lineId) {
  const inv = findInvoice(currentInvoiceId()); if (!inv) return;
  readInvoiceForm(inv, false);
  const l = inv.lines.find((x) => x.id === lineId); if (!l || !norm(l.name)) return;
  const existing = DB.catalog.find((c) => sameName(c.name, l.name));
  commit((db) => {
    let it = existing;
    if (!it) { it = { id: uniqueId(db.catalog, l.name), name: norm(l.name), unit: l.unit || 'pcs', category: 'Other', threshold: 0, step: 1, hidden: false }; db.catalog.push(it); }
    l.itemId = it.id; l.name = it.name; l.auto = false; inv.updatedAt = nowISO();
  });
  toast(existing ? t('Linked to {item}', { item: iname(existing) }) : t('Added to items: {item}. Set its alert level in Settings.', { item: l.name }));
}
/** Load thumbnails / page images from IndexedDB into the current view. */
async function hydrateScanImages() {
  for (const el of $$('[data-thumb]')) {
    const rec = await scanGet(el.dataset.thumb);
    if (rec && rec.thumb && document.contains(el)) { const u = URL.createObjectURL(rec.thumb); el.innerHTML = `<img src="${u}" alt="">`; el.firstChild.onload = () => URL.revokeObjectURL(u); }
  }
  const imgs = $$('[data-page-img]'); if (!imgs.length) return;
  const rec = await scanGet(imgs[0].dataset.pageImg);
  imgs.forEach((img) => {
    const b = rec && rec.pages && rec.pages[+img.dataset.pageN];
    if (b && document.contains(img)) { const u = URL.createObjectURL(b); img.src = u; img.onload = () => URL.revokeObjectURL(u); }
    else img.closest('.inv-page').classList.add('missing');
  });
}
/** The "Scan invoice" row shown on Stock and Orders. */
function scanButtons() {
  const n = DB.invoices.length;
  return `<div class="scan-row"><button class="btn primary" data-act="inv-scan">${icon('camera')} ${esc(t('Scan invoice'))}</button>
    <button class="btn" data-act="go" data-tab="invoices">${icon('receipt')} ${esc(t('Invoices'))}${n ? ` <span class="n">${n}</span>` : ''}</button></div>`;
}


/* ===== src/08-settings.js ===== */

/* ---------- Settings ---------- */
let installPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e; if (UI.tab === 'settings') render(); });
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function renderSettings() {
  const theme = DB.settings.theme === 'light' ? 'light' : 'dark';
  const hasSample = DB.jobs.some((j) => j.sample) || DB.orders.some((o) => o.sample) || Object.values(DB.stock).some((s) => Object.values(s || {}).some((e) => e.sample));
  let bytes = 0; try { bytes = (localStorage.getItem(STORAGE_KEY) || '').length * 2; } catch (e) {}
  const listRow = (title, desc, act, id, hidden) => `<div class="list-row${hidden ? ' hidden-item' : ''}"><div style="min-width:0"><div class="t">${esc(title)}</div>${desc ? `<div class="d">${esc(desc)}</div>` : ''}</div>
    <button class="btn sm" data-act="${act}" data-id="${esc(id)}">${esc(t('Edit'))}</button></div>`;
  const install = isStandalone() ? `<p class="muted" style="margin:0">${esc(t('Installed: you are using the home-screen app.'))}</p>`
    : `${installPrompt ? `<button class="btn primary block" data-act="install">${esc(t('Add to Home Screen'))}</button>` : ''}
       <p class="muted small" style="margin:${installPrompt ? '10px' : '0'} 0 0">${esc(isIOS() ? t('iPhone/iPad: open this page in Safari, tap Share, then “Add to Home Screen”.') : t('Android: open the browser menu (⋮) and tap “Install app” or “Add to Home screen”. iPhone: Safari → Share → “Add to Home Screen”.'))}</p>`;
  const itemsByCat = CATEGORIES.map((cat) => {
    const items = DB.catalog.filter((c) => c.category === cat);
    return items.length ? `<h4 class="cat-head">${esc(catName(cat))}</h4><div class="list">${items.map((c) => listRow(iname(c), `${t('Unit')}: ${U(c.unit)} · ${t('Alert at {n}', { n: fmtQty(c.threshold) })} · ± ${fmtQty(c.step || 1)}${c.hidden ? ' · ' + t('hidden') : ''}`, 'item-edit', c.id, c.hidden)).join('')}</div>` : '';
  }).join('');
  return `<div class="page-head"><button class="icon-btn" data-act="go" data-tab="live" aria-label="${esc(t('Back'))}">${icon('back')}</button><h2 style="flex:1">${esc(t('Settings'))}</h2></div>

    <div class="section"><h3>${esc(t('Language'))}</h3></div>
    <div class="seg" role="group" aria-label="${esc(t('Language'))}">${LANGS.map((l) => `<button aria-pressed="${LANG === l.id}" data-act="lang" data-v="${l.id}">${esc(l.label)}</button>`).join('')}</div>

    <div class="section"><h3>${esc(t('Appearance'))}</h3></div>
    <div class="seg" role="group" aria-label="${esc(t('Theme'))}"><button aria-pressed="${theme === 'dark'}" data-act="theme" data-v="dark">${esc(t('Dark'))}</button><button aria-pressed="${theme === 'light'}" data-act="theme" data-v="light">${esc(t('Light'))}</button></div>

    <div class="section"><h3>${esc(t('Install on your phone'))}</h3></div>
    <div class="about">${install}</div>

    <div class="section"><h3>${esc(t('Locations'))}</h3><button class="btn sm" data-act="loc-edit">${icon('plus')} ${esc(t('Add'))}</button></div>
    <div class="list">${DB.locations.map((l) => listRow(lname(l), [l.fullName ? t(l.fullName) : '', l.hidden ? t('hidden') : ''].filter(Boolean).join(' · '), 'loc-edit', l.id, l.hidden)).join('')}</div>

    <div class="section"><h3>${esc(t('Suppliers'))}</h3><button class="btn sm" data-act="sup-edit">${icon('plus')} ${esc(t('Add'))}</button></div>
    <div class="list">${DB.suppliers.map((s) => listRow(sname(s), [s.category ? t(s.category) : '', s.contact ? t('Contact: {name}', { name: s.contact }) : '', s.hidden ? t('hidden') : ''].filter(Boolean).join(' · '), 'sup-edit', s.id, s.hidden)).join('')}</div>

    <div class="section"><h3>${esc(t('Items'))}</h3><button class="btn sm" data-act="item-edit">${icon('plus')} ${esc(t('Add'))}</button></div>
    <p class="hint" style="margin:0 2px 6px">${esc(t('Alert levels are starting defaults. Change them here, or per location from the Stock tab.'))}</p>
    ${itemsByCat}

    <div class="section"><h3>${esc(t('Invoices'))}</h3></div>
    <div class="list"><div class="list-row"><div style="min-width:0"><div class="t">${esc(t('Invoice history'))}</div><div class="d">${esc(t('{n} saved on this device', { n: DB.invoices.length }))}</div></div>
      <button class="btn sm" data-act="go" data-tab="invoices">${esc(t('Open'))}</button></div></div>

    <div class="section"><h3>${esc(t('Backup'))}</h3></div>
    <div class="btn-row"><button class="btn" data-act="export">${esc(t('Export backup'))}</button><button class="btn" data-act="import">${esc(t('Import backup'))}</button></div>
    <input type="file" id="import-file" accept="application/json,.json" hidden>
    <p class="hint" style="margin:8px 2px 0">${esc(t('Data is stored only on this device. Export a backup regularly, and to move to a new phone.'))} ${esc(t('Invoice photos are not included in backups.'))}</p>

    <div class="section"><h3>${esc(t('Sample data'))}</h3></div>
    <div class="about"><p class="muted small">${esc(t('Load a few clearly-labelled SAMPLE jobs, orders and stock counts to try the app. They are marked “Sample” and can be removed in one tap.'))}</p>
      ${hasSample ? `<button class="btn block" data-act="sample-clear">${esc(t('Remove sample data'))}</button>` : `<button class="btn block" data-act="sample-load">${esc(t('Load sample data'))}</button>`}</div>

    <div class="section"><h3>${esc(t('Danger zone'))}</h3></div>
    <button class="btn danger block" data-act="clear-all">${esc(t('Clear all data'))}</button>

    <div class="section"><h3>${esc(t('About'))}</h3></div>
    <div class="about">
      <p class="credit">Bang Bang Kitchen</p>
      <p>${esc(t('Created by {name}', { name: 'Tomasz Zdankowski' }))}</p>
      <p class="muted small">${esc(t('Version {v}', { v: APP_VERSION }))} · ${esc(t('Data format v{v}', { v: SCHEMA_VERSION }))} · ${esc(t('{n} KB stored on this device', { n: Math.max(1, Math.round(bytes / 1024)) }))}</p>
      <p class="muted small" style="margin:0">${esc(t('Works offline. No accounts, no tracking, nothing is sent anywhere.'))}</p>
    </div>`;
}

/* Entity editors */
function nameTaken(list, name, exceptId) { return list.some((x) => x.id !== exceptId && (sameName(x.name, name) || sameName(t(x.name), name))); }
function uniqueId(list, base) { let id = slug(base), n = 2; while (list.some((x) => x.id === id)) id = slug(base) + '-' + n++; return id; }
/** Keep the stored preset name unless the user actually changed the (possibly translated) display text. */
const keepName = (rec, shown, typed) => (rec && typed === shown ? rec.name : typed);

function locationSheet(id) {
  const l = id && locById(id);
  openSheet({
    title: l ? t('Edit location') : t('Add location'),
    body: `<form id="ent-form" novalidate>
      <label class="field"><span>${esc(t('Name'))}</span><input type="text" name="name" value="${esc(l ? lname(l) : '')}" maxlength="40" required autofocus placeholder="${esc(t('e.g. Camden'))}"></label>
      <label class="field"><span>${esc(t('Full name or note (optional)'))}</span><input type="text" name="full" value="${esc(l && l.fullName ? t(l.fullName) : '')}" maxlength="60"></label>
      ${l ? `<label class="check"><input type="checkbox" name="hidden" ${l.hidden ? 'checked' : ''}> ${esc(t('Hide this location (keeps its history)'))}</label>` : ''}
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="ent-form">${esc(t('Save'))}</button>`,
    onMount: (sheet) => $('#ent-form', sheet).addEventListener('submit', (e) => {
      e.preventDefault(); clearErrors(sheet);
      const f = e.target; const name = norm(f.name.value);
      if (!name) return fieldError(f.name, t('Enter a name.'));
      if (nameTaken(DB.locations, name, l && l.id)) return fieldError(f.name, t('A location with this name already exists.'));
      const full = norm(f.full.value);
      commit((db) => {
        if (l) { l.name = keepName(l, lname(l), name); l.fullName = l.fullName && full === t(l.fullName) ? l.fullName : full; l.hidden = f.hidden.checked; }
        else db.locations.push({ id: uniqueId(db.locations, name), name, fullName: full, hidden: false });
      });
      closeSheet(true); toast(t('Saved'));
    })
  });
}
function supplierSheet(id) {
  const s = id && supById(id);
  openSheet({
    title: s ? t('Edit supplier') : t('Add supplier'),
    body: `<form id="ent-form" novalidate>
      <label class="field"><span>${esc(t('Name'))}</span><input type="text" name="name" value="${esc(s ? sname(s) : '')}" maxlength="60" required autofocus></label>
      <label class="field"><span>${esc(t('What they supply'))}</span><input type="text" name="category" value="${esc(s && s.category ? t(s.category) : '')}" maxlength="60" placeholder="${esc(t('e.g. Veg'))}"></label>
      <label class="field"><span>${esc(t('Contact name'))}</span><input type="text" name="contact" value="${esc(s ? s.contact : '')}" maxlength="60"></label>
      ${s ? `<label class="check"><input type="checkbox" name="hidden" ${s.hidden ? 'checked' : ''}> ${esc(t('Hide this supplier (keeps its history)'))}</label>` : ''}
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="ent-form">${esc(t('Save'))}</button>`,
    onMount: (sheet) => $('#ent-form', sheet).addEventListener('submit', (e) => {
      e.preventDefault(); clearErrors(sheet);
      const f = e.target; const name = norm(f.name.value);
      if (!name) return fieldError(f.name, t('Enter a name.'));
      if (nameTaken(DB.suppliers, name, s && s.id)) return fieldError(f.name, t('A supplier with this name already exists.'));
      const cat = norm(f.category.value);
      const data = { category: s && s.category && cat === t(s.category) ? s.category : cat, contact: norm(f.contact.value) };
      commit((db) => {
        if (s) Object.assign(s, data, { name: keepName(s, sname(s), name), hidden: f.hidden.checked });
        else db.suppliers.push({ id: uniqueId(db.suppliers, name), name, ...data, hidden: false });
      });
      closeSheet(true); toast(t('Saved'));
    })
  });
}
function itemSheet(id) {
  const it = id && itemById(id);
  openSheet({
    title: it ? t('Edit item') : t('Add item'),
    body: `<form id="ent-form" novalidate>
      <label class="field"><span>${esc(t('Name'))}</span><input type="text" name="name" value="${esc(it ? iname(it) : '')}" maxlength="60" required autofocus placeholder="${esc(t('e.g. Kimchi'))}"></label>
      <div class="row2">
        <label class="field"><span>${esc(t('Category'))}</span><select name="category">${CATEGORIES.map((c) => opt(c, catName(c), (it ? it.category : 'Production goods') === c)).join('')}</select></label>
        <label class="field"><span>${esc(t('Unit'))}</span><select name="unit">${unitOptions(it ? it.unit : 'pcs')}</select></label>
      </div>
      <div class="row2">
        <label class="field"><span>${esc(t('Default alert level'))}</span><input type="text" inputmode="decimal" name="threshold" value="${it ? esc(String(it.threshold)) : ''}" placeholder="0"></label>
        <label class="field"><span>${esc(t('+/− step'))}</span><input type="text" inputmode="decimal" name="step" value="${it ? esc(String(it.step || 1)) : '1'}"></label>
      </div>
      ${it ? `<label class="check"><input type="checkbox" name="hidden" ${it.hidden ? 'checked' : ''}> ${esc(t('Hide this item (keeps its history)'))}</label>` : ''}
    </form>`,
    foot: `<button class="btn" type="button" data-act="sheet-close">${esc(t('Cancel'))}</button><button class="btn primary" type="submit" form="ent-form">${esc(t('Save'))}</button>`,
    onMount: (sheet) => $('#ent-form', sheet).addEventListener('submit', (e) => {
      e.preventDefault(); clearErrors(sheet);
      const f = e.target; const name = norm(f.name.value); let ok = true;
      if (!name) ok = fieldError(f.name, t('Enter a name.'));
      else if (nameTaken(DB.catalog, name, it && it.id)) ok = fieldError(f.name, t('An item with this name already exists.'));
      const th = f.threshold.value.trim() === '' ? 0 : parseQty(f.threshold.value);
      if (Number.isNaN(th)) ok = fieldError(f.threshold, t('Enter a number, 0 or more.'));
      const step = parseQty(f.step.value);
      if (!(step > 0)) ok = fieldError(f.step, t('Enter a number above 0.'));
      if (!ok) return;
      const data = { category: f.category.value, unit: f.unit.value, threshold: th, step };
      commit((db) => {
        if (it) Object.assign(it, data, { name: keepName(it, iname(it), name), hidden: f.hidden.checked });
        else db.catalog.push({ id: uniqueId(db.catalog, name), name, ...data, hidden: false });
      });
      closeSheet(true); toast(t('Saved'));
    })
  });
}

/* Backup */
function exportBackup() {
  const payload = { app: APP_ID, kind: 'backup', exportedAt: nowISO(), appVersion: APP_VERSION, version: SCHEMA_VERSION, data: DB };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `bang-bang-kitchen-backup-${dayKey()}-${timeKey(new Date()).replace(':', '')}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  toast(t('Backup exported'));
}
async function importBackup(file) {
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) return toast(t('That file is too large to be a backup.'), { error: true });
  let parsed;
  try { parsed = JSON.parse(await file.text()); } catch (e) { return toast(t('That file is not a valid backup.'), { error: true }); }
  const data = parsed && parsed.app === APP_ID && parsed.data ? parsed.data : parsed;
  if (!data || data.app !== APP_ID || !Array.isArray(data.locations) || !Array.isArray(data.jobs) || !Array.isArray(data.orders)) return toast(t('That file is not a Bang Bang Kitchen backup.'), { error: true });
  if ((data.version || 0) > SCHEMA_VERSION) return toast(t('This backup is from a newer version of the app. Update the app first.'), { error: true });
  const ok = await confirmDialog({ title: t('Replace data with this backup?'), message: t('Everything on this device will be replaced by the backup ({jobs} jobs, {orders} orders).', { jobs: data.jobs.length, orders: data.orders.length }), ok: t('Replace'), danger: true });
  if (!ok) return;
  DB = migrate(data);
  save(); applyTheme(); render();
  toast(t('Backup imported'));
}

/* Sample data — always flagged sample:true and removable. */
function loadSample() {
  const now = Date.now(), ago = (min) => new Date(now - min * 60e3).toISOString();
  const today = dayKey(), at = (day, time) => londonToDate(day, time).toISOString();
  const S = { sample: true };
  const job = (restaurantId, items, status, minAgo, requestedBy, notes = '') => {
    const hist = [{ status: 'requested', at: ago(minAgo) }];
    if (status !== 'requested') hist.push({ status: 'in_progress', at: ago(Math.round(minAgo / 2)) });
    if (status === 'ready') hist.push({ status: 'ready', at: ago(10) });
    return { id: uid('job'), ...S, restaurantId, items, status, requestedBy, notes, createdAt: ago(minAgo), updatedAt: hist[hist.length - 1].at, history: hist };
  };
  const L = (itemId, qty) => { const it = itemById(itemId); return { itemId, name: it ? it.name : itemId, qty, unit: it ? it.unit : 'pcs' }; };
  DB.jobs.push(
    job('btb', [L('burger-sauce', 20), L('green-curry', 8), L('gastro-deep', 3)], 'requested', 95, 'Sample: Henrique', 'SAMPLE: example only'),
    job('winter-market', [L('pulled-lamb', 6), L('mustard-pickle', 8)], 'in_progress', 240, 'Sample: Henrique'),
    job('southbank', [L('sieve', 1), L('tongs', 2)], 'ready', 300, 'Sample: Eddie')
  );
  const order = (supplierId, restaurantId, items, neededBy, status, extra = {}) => ({ id: uid('ord'), ...S, supplierId, restaurantId, items, neededBy, status, notes: 'SAMPLE: example only', createdAt: ago(600), updatedAt: ago(30), history: [{ status: 'ordered', at: ago(600) }].concat(status !== 'ordered' ? [{ status, at: ago(30) }] : []), problems: [], ...extra });
  DB.orders.push(
    order('bread-macaroon', 'watson', [L('bun-regular', 200), L('bun-vegan', 30)], at(today, '11:00'), 'on_the_way'),
    order('swaledale', 'btb', [{ itemId: null, name: 'Chicken thigh', qty: 10, unit: 'kg' }], at(addDays(today, 1), '08:00'), 'ordered'),
    order('swaledale', 'ladywell', [{ itemId: null, name: 'Chicken wings', qty: 16.15, unit: 'kg' }], at(addDays(today, -1), '09:00'), 'problem',
      { problems: [{ id: uid('prb'), type: 'short', note: 'SAMPLE: 10.65 kg delivered', creditRequested: true, at: ago(900) }] })
  );
  const setS = (loc, itemId, qty) => { DB.stock[loc] = DB.stock[loc] || {}; if (!DB.stock[loc][itemId]) DB.stock[loc][itemId] = { qty, updatedAt: ago(45), sample: true }; };
  setS('rse', 'bun-regular', 30); setS('rse', 'bun-vegan', 19); setS('rse', 'oil-clean', 130);
  setS('watson', 'oil-clean', 15); setS('watson', 'bun-regular', 40); setS('ladywell', 'bun-frozen', 0);
  save(); render();
  toast(t('Sample data loaded — marked “Sample”'));
}
function clearSample() {
  commit((db) => {
    db.jobs = db.jobs.filter((j) => !j.sample);
    db.orders = db.orders.filter((o) => !o.sample);
    for (const loc of Object.keys(db.stock)) {
      for (const k of Object.keys(db.stock[loc])) if (db.stock[loc][k].sample) delete db.stock[loc][k];
      if (!Object.keys(db.stock[loc]).length) delete db.stock[loc];
    }
  });
  toast(t('Sample data removed'));
}


/* ===== src/09-app.js ===== */

/* ---------- Router & chrome ---------- */
const TABS = ['live', 'production', 'stock', 'orders', 'settings', 'invoices'];
const VIEWS = { live: renderLive, production: renderProduction, stock: renderStock, orders: renderOrders, settings: renderSettings, invoices: renderInvoices, invoice: renderInvoice };
function currentTab() { const h = location.hash.replace('#', ''); if (h.startsWith('invoice/')) return 'invoice'; return TABS.includes(h) ? h : 'live'; }
const isInvoiceView = (tab) => tab === 'invoices' || tab === 'invoice';
function go(tab) { if (location.hash !== '#' + tab) location.hash = tab; else render(); }

function applyTheme() {
  const light = DB.settings.theme === 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  const meta = $('meta[name="theme-color"]'); if (meta) meta.content = light ? '#f3f3f1' : '#0e0f11';
}
function updateChrome() {
  const d = liveData();
  const low = d.low.length, issues = new Set([...d.late, ...d.problems]).size;
  $$('.tab').forEach((b) => {
    const tab = b.dataset.tab;
    const lbl = $('.tl', b); lbl.textContent = t(lbl.dataset.label);
    let n = 0, what = '';
    if (tab === 'stock') { n = low; what = t('low-stock items'); }
    if (tab === 'orders') { n = issues; what = t('late or problem orders'); }
    if (tab === 'production') { n = d.ready.length; what = t('jobs ready'); }
    let dot = $('.badge-dot', b);
    if (n) { if (!dot) { dot = document.createElement('span'); dot.className = 'badge-dot'; b.appendChild(dot); } dot.textContent = n > 99 ? '99+' : n; dot.setAttribute('aria-label', `${n} ${what}`); }
    else if (dot) dot.remove();
    if (tab === (isInvoiceView(UI.tab) ? UI.invoiceFrom || 'stock' : UI.tab)) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  const now = new Date();
  const k = dayKey(now);
  $('#subtitle').textContent = `${weekdayOf(k)} ${Number(k.slice(8))} ${MONTHS[LANG][Number(k.slice(5, 7)) - 1]} · ${timeKey(now)}`;
  const sb = $('#settings-btn'); sb.setAttribute('aria-label', t('Settings'));
  if (UI.tab === 'settings') sb.setAttribute('aria-current', 'page'); else sb.removeAttribute('aria-current');
  const other = LANGS.find((l) => l.id !== LANG);
  const lb = $('#lang-btn'); lb.textContent = other.short; lb.setAttribute('aria-label', t('Switch language to {lang}', { lang: other.label })); lb.title = other.label;
  $('.tabbar').setAttribute('aria-label', t('Main'));
  $('.skip').textContent = t('Skip to content');
}
function render() {
  const tab = currentTab();
  const changedTab = tab !== UI.tab;
  UI.tab = tab;
  const view = $('#view');
  if (isInvoiceView(tab) && !isInvoiceView(UI.prevTab || '') && UI.prevTab && UI.prevTab !== 'settings') UI.invoiceFrom = UI.prevTab;
  if (tab === 'invoices' && UI.prevTab === 'settings') UI.invoiceFrom = 'settings';
  UI.prevTab = tab;
  view.className = tab === 'live' || tab === 'invoice' ? 'wide' : '';
  view.innerHTML = VIEWS[tab]();
  let fab = $('#fab');
  const fabCfg = tab === 'production' ? ['job-new', t('New job')] : tab === 'orders' ? ['order-new', t('New order')] : null;
  if (fabCfg) {
    if (!fab) { fab = document.createElement('button'); fab.id = 'fab'; fab.className = 'fab'; view.after(fab); }
    fab.dataset.act = fabCfg[0]; fab.innerHTML = `${icon('plus')}<span>${esc(fabCfg[1])}</span>`;
  } else if (fab) fab.remove();
  updateChrome();
  if (changedTab) { window.scrollTo(0, 0); }
  if (isInvoiceView(tab)) { bindInvoiceEditor(); hydrateScanImages(); }
}

/* ---------- Actions (event delegation) ---------- */
const findJob = (id) => DB.jobs.find((j) => j.id === id);
const findOrder = (id) => DB.orders.find((o) => o.id === id);
const ACTIONS = {
  go: (el) => go(el.dataset.tab),
  'sheet-close': () => closeSheet(),
  'lang-toggle': () => switchLang(LANGS.find((l) => l.id !== LANG).id),
  lang: (el) => switchLang(el.dataset.v),
  theme: (el) => { commit((db) => { db.settings.theme = el.dataset.v; }); applyTheme(); },
  stat: (el) => {
    const tab = el.dataset.tab, f = el.dataset.filter;
    if (tab === 'production') UI.prod = { loc: 'all', status: f };
    if (tab === 'stock') UI.stock = { ...UI.stock, loc: 'all', low: true };
    if (tab === 'orders') UI.orders = f === 'today' ? { status: 'active', sup: 'all', loc: 'all', date: 'today', day: '' } : { status: 'issues', sup: 'all', loc: 'all', date: 'any', day: '' };
    saveUI(); go(tab);
  },
  // Production
  'job-new': () => jobForm(),
  'job-open': (el) => jobDetail(el.dataset.id),
  'job-edit': (el) => { const j = findJob(el.dataset.id); if (j) jobForm(j); },
  'job-status': async (el) => {
    const j = findJob(el.dataset.id); if (!j) return;
    if (el.dataset.status === 'cancelled' && j.status !== 'cancelled' && !(await confirmDialog({ title: t('Cancel this job?'), message: t('It stays in history as Cancelled.'), ok: t('Cancel job'), danger: true }))) return;
    setJobStatus(j, el.dataset.status); refreshOpenSheet();
  },
  'job-delete': async (el) => {
    const j = findJob(el.dataset.id); if (!j) return;
    if (!(await confirmDialog({ title: t('Delete this job?'), message: t('It will be removed completely. Use Cancelled to keep it in history.'), ok: t('Delete'), danger: true }))) return;
    const idx = DB.jobs.indexOf(j);
    closeSheet(true); openDetail = null;
    commit((db) => db.jobs.splice(idx, 1));
    toast(t('Job deleted'), { action: t('Undo'), onAction: () => commit((db) => db.jobs.splice(Math.min(idx, db.jobs.length), 0, j)) });
  },
  'prod-status': (el) => { UI.prod.status = el.dataset.v; saveUI(); render(); },
  'prod-reset': () => { UI.prod = { loc: 'all', status: 'open' }; saveUI(); render(); },
  // Stock
  'stock-loc': (el) => { UI.stock.loc = el.dataset.v; saveUI(); render(); },
  'stock-low': () => { UI.stock.low = !UI.stock.low; saveUI(); render(); },
  'stock-step': (el) => stepStock(el.dataset.loc, el.dataset.item, Number(el.dataset.d)),
  'stock-set': (el) => stockSheet(el.dataset.loc, el.dataset.item),
  'stock-uncount': (el) => {
    const { loc, item } = el.dataset; const prev = stockEntry(loc, item); if (!prev) return;
    commit((db) => { delete db.stock[loc][item]; });
    closeSheet(true);
    commit(() => logStock(loc, item, prev.qty, null, 'uncount'), { render: false });
    toast(t('Marked as not counted'), { action: t('Undo'), onAction: () => commit((db) => { db.stock[loc] = db.stock[loc] || {}; db.stock[loc][item] = prev; logStock(loc, item, null, prev.qty, 'undo'); }) });
  },
  // Orders
  'order-new': () => orderForm(),
  'order-open': (el) => orderDetail(el.dataset.id),
  'order-edit': (el) => { const o = findOrder(el.dataset.id); if (o) orderForm(o); },
  'order-status': async (el) => {
    const o = findOrder(el.dataset.id); if (!o) return;
    if (el.dataset.status === 'cancelled' && o.status !== 'cancelled' && !(await confirmDialog({ title: t('Cancel this order?'), message: t('It stays in history as Cancelled.'), ok: t('Cancel order'), danger: true }))) return;
    setOrderStatus(o, el.dataset.status); refreshOpenSheet();
  },
  'order-delete': async (el) => {
    const o = findOrder(el.dataset.id); if (!o) return;
    if (!(await confirmDialog({ title: t('Delete this order?'), message: t('It will be removed completely, including its problems.'), ok: t('Delete'), danger: true }))) return;
    const idx = DB.orders.indexOf(o);
    closeSheet(true); openDetail = null;
    commit((db) => db.orders.splice(idx, 1));
    toast(t('Order deleted'), { action: t('Undo'), onAction: () => commit((db) => db.orders.splice(Math.min(idx, db.orders.length), 0, o)) });
  },
  'problem-new': (el) => problemForm(el.dataset.id),
  // Invoices
  'inv-scan': () => scanChooser(),
  'inv-camera': () => { ensureFileInputs(); $('#inv-cam').click(); },
  'inv-upload': () => { ensureFileInputs(); $('#inv-file').click(); },
  'inv-manual': () => startManual(),
  'inv-open': (el) => go('invoice/' + encodeURIComponent(el.dataset.id)),
  'inv-line-add': () => {
    const inv = findInvoice(currentInvoiceId()); if (!inv) return;
    readInvoiceForm(inv, false); const l = blankLine(); inv.lines.push(l); save();
    const box = $('[data-ilines]'); box.insertAdjacentHTML('beforeend', invLineRow(l, inv.lines.length - 1));
    $('[data-iline]:last-child select', box).focus();
  },
  'inv-line-del': (el) => {
    const inv = findInvoice(currentInvoiceId()); if (!inv) return;
    const row = el.closest('[data-iline]'); readInvoiceForm(inv, false);
    const idx = inv.lines.findIndex((l) => l.id === row.dataset.iline); if (idx < 0) return;
    const [removed] = inv.lines.splice(idx, 1); inv.updatedAt = nowISO();
    if (!inv.lines.length) inv.lines.push(blankLine());
    save(); render();
    toast(t('Line removed'), { action: t('Undo'), onAction: () => { const cur = findInvoice(inv.id); if (!cur) return; cur.lines = cur.lines.filter((l) => l.name || l.qty != null); cur.lines.splice(Math.min(idx, cur.lines.length), 0, removed); save(); render(); } });
  },
  'inv-add-item': (el) => addLineAsItem(el.dataset.line),
  'inv-receive': () => receiveInvoice(),
  'inv-delete': (el) => deleteInvoice(el.dataset.id),
  'inv-rotate': () => rotateAndReread(),
  'inv-view': (el) => viewInvoicePage(Number(el.dataset.page)),
  'inv-text': () => showRecognisedText(),
  'problem-resolve': (el) => { const o = findOrder(el.dataset.id); if (o) { resolveProblem(o, el.dataset.pid); refreshOpenSheet(); } },
  'orders-status': (el) => { UI.orders.status = el.dataset.v; saveUI(); render(); },
  'orders-reset': () => { UI.orders = { status: 'all', sup: 'all', loc: 'all', date: 'any', day: '' }; saveUI(); render(); },
  // Lines
  'line-add': (el) => {
    const lines = $('[data-lines]', el.closest('form') || document);
    const idx = $$('[data-line]', lines).length + Date.now() % 1000;
    lines.insertAdjacentHTML('beforeend', lineRow({}, idx));
    $('[data-line]:last-child select', lines).focus();
  },
  'line-del': (el) => {
    const lines = el.closest('[data-lines]');
    const row = el.closest('[data-line]');
    if ($$('[data-line]', lines).length > 1) row.remove();
    else { $('[data-f="item"]', row).value = ''; $('[data-f="qty"]', row).value = ''; $('.custom', row).hidden = true; }
  },
  // Settings
  install: async () => { if (!installPrompt) return; installPrompt.prompt(); try { await installPrompt.userChoice; } catch (e) {} installPrompt = null; render(); },
  'loc-edit': (el) => locationSheet(el.dataset.id),
  'sup-edit': (el) => supplierSheet(el.dataset.id),
  'item-edit': (el) => itemSheet(el.dataset.id),
  export: () => exportBackup(),
  import: () => { const inp = $('#import-file'); inp.value = ''; inp.click(); },
  'sample-load': async () => {
    if (await confirmDialog({ title: t('Load sample data?'), message: t('Adds example jobs, orders and stock counts marked “Sample”. Your own data is kept. Remove them any time.'), ok: t('Load sample') })) loadSample();
  },
  'sample-clear': () => clearSample(),
  'clear-all': async () => {
    if (!(await confirmDialog({ title: t('Clear all data?'), message: t('Deletes every job, order, stock count and your changes to locations, suppliers and items on this device. Export a backup first if unsure.'), ok: t('Clear everything'), danger: true, typed: 'DELETE' }))) return;
    const theme = DB.settings.theme;
    DB = freshData(); DB.settings.theme = theme;
    scanClearAll();
    save(); render(); toast(t('All data cleared'));
  }
};
function switchLang(id) {
  setLang(id);
  render();
  if (openDetail) refreshOpenSheet(); else closeSheet(true);
  toast(t('Language: {lang}', { lang: LANGS.find((l) => l.id === id).label }));
}
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const fn = ACTIONS[el.dataset.act];
  if (!fn) return;
  if (el.tagName === 'A') e.preventDefault();
  fn(el, e);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $('#sheet-root').innerHTML && !$('#dialog-root').innerHTML) { closeSheet(); return; }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"][data-act]')) { e.preventDefault(); e.target.click(); }
});
document.addEventListener('change', (e) => {
  const el = e.target;
  if (el.id === 'import-file') return importBackup(el.files && el.files[0]);
  const k = el.dataset && el.dataset.change; if (!k) return;
  if (k === 'prod-loc') UI.prod.loc = el.value;
  if (k === 'orders-sup') UI.orders.sup = el.value;
  if (k === 'orders-loc') UI.orders.loc = el.value;
  if (k === 'orders-date') { UI.orders.date = el.value; if (el.value === 'day' && !UI.orders.day) UI.orders.day = dayKey(); }
  if (k === 'orders-day') UI.orders.day = el.value;
  saveUI(); render();
});
window.addEventListener('hashchange', () => { closeSheet(true); openDetail = null; render(); });
// Another tab/window changed the data: reload it.
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) { DB = load(); applyTheme(); render(); }
  if (e.key === LANG_KEY && e.newValue && e.newValue !== LANG) { setLang(e.newValue); render(); }
});

/* ---------- Auto-refresh (local data only) ---------- */
function tick() {
  const busy = document.activeElement && document.activeElement.closest && document.activeElement.closest('#view select, #view input');
  if (document.hidden) return;
  if (!busy && (UI.tab === 'live' || UI.tab === 'production' || UI.tab === 'orders')) render(); else updateChrome();
}
setInterval(tick, 30000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

/* ---------- Boot ---------- */
$$('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
$('#settings-btn').innerHTML = icon('settings');
applyTheme();
save(); // persist migrated schema
render();
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch((e) => console.warn('Offline mode unavailable', e)));
}
