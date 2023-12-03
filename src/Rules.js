import React, { useEffect, useState } from 'react';
import BackToHome from './BackToHome';
import ConstHelper from './helpers/constHelper';

function Rules(props) {
    const [myStyle, setMyStyle] = useState({width: ConstHelper.getWidthApp()});
    const [content, setContent] = useState('Streszczenie zasad');
    const [rule1Class, set1Class] = useState('d-none');
    const [rule2Class, set2Class] = useState('d-none');
    const [rule3Class, set3Class] = useState('d-none');
    const [rule4Class, set4Class] = useState('d-none');
    const [rule5Class, set5Class] = useState('d-none');
    const [rule6Class, set6Class] = useState('d-none');
    const [rule7Class, set7Class] = useState('d-none');
    const [rule8Class, set8Class] = useState('d-none');

    const changeRule = (title) => {
        setContent(title);
        set1Class('d-none');
        set2Class('d-none');
        set3Class('d-none');
        set4Class('d-none');
        set5Class('d-none');
        set6Class('d-none');
        set7Class('d-none');
        set8Class('d-none');
    }

    useEffect(() => {
        if ('Rules' === props.activeStep) {
            setMyStyle({width: ConstHelper.getWidthApp()});
        } else {
            setMyStyle({width: ConstHelper.getWidthApp(), left: ConstHelper.getWidthApp()});
        }
    }, [props.activeStep]);

    return (
        <div className="panel" style={myStyle}>
            <BackToHome changeVisible={props.changeVisible} />
            <div className='btn' style={{backgroundColor: 'var(--secondary-color)'}}>
                <div onClick={() => changeRule('Streszczenie zasad')}>{content}</div>
                <div className={rule1Class}>
                    tutaj jest do zrobienia moduł do liczenia odległości ...
                </div>
                <div className={rule2Class}>
                    tutaj jest do zrobienia moduł obliczania zasięgów
                </div>
                <div className={rule3Class}>
                    <details>
                        <summary>Siła</summary>
                        <ul>
                            <li>
                                Czysta siła fizyczna. Łamanie, ciągnięcie, dźwiganie itp.
                            </li>
                            <li>
                                Trzymanie się powierzchni wspinaczki, gdy ktoś próbuje Cię zepchnąć.
                            </li>
                            <li>
                                Szczególnie daleki skok. Pływanie w wirach.
                            </li>
                            <li>
                                Wyrywanie się z więzów czy wyważanie drzwi.
                            </li>
                            <li>
                                Trzymanie się wozu gdy się go trzymasz i ciągnie Cię on po ziemi
                            </li>
                        </ul>
                    </details>
                    <ul>
                        <li>Atletyka</li>
                    </ul>
                    <details>
                        <summary>Zręczność</summary>
                        <ul>
                            <li>
                                Refleks, zwinność i równowaga.
                            </li>
                            <li>
                                Szybkie lub ciche poruszanie się. Utrzymanie równowagi na chwiejnym podłożu.
                            </li>
                            <li>
                                Kradzież przedmiotu lub ukrywanie go u siebie.
                            </li>
                            <li>
                                Prowadzenie pojazdów. Rozbrajanie pułapek. Umiejętne związanie jeńca.
                            </li>
                            <li>
                                Wyswabadzanie się z więzów.
                            </li>
                            <li>
                                Wytwarzanie małego lub bogatego w szczegóły przedmiotu.
                            </li>
                        </ul>
                    </details>
                    <ul>
                        <li>Akrobatyka</li>
                        <li>Skradanie się</li>
                        <li>Zwinne dłonie</li>
                    </ul>
                    <details>
                        <summary>Kondycja</summary>
                        <p>
                            Miara zdrowia, wigoru i sił witalnych. Raczej rozpatrzywany paswnie ale zdarzają się sytuacje
                            kiedy bohater musi przezwyciężyć swoje ograniczenia ciała. Wówczas można wykonać test kondycji.
                        </p>
                        <ul>
                            <li>
                                Wstrzymywanie oddechu
                            </li>
                            <li>
                                wielogodzinny marsz lub praca bez odpoczynku
                            </li>
                            <li>
                                funkcjonowanie bez snu lub bez jedzenia i picia
                            </li>
                            <li>
                                wypicie duszkiem całego kufla piwa
                            </li>
                        </ul>
                    </details>
                    <ul>
                        <li>---</li>
                    </ul>
                    <details>
                        <summary>Inteligencja</summary>
                        <ul>
                            <li>
                                Porozumiewanie się z istotami bez użycia słów.
                            </li>
                            <li>
                                Wycena drogocennego przedmiotu
                            </li>
                            <li>
                                Przygotowanie wiarygodnego przebrania strażnika miejsckiego
                            </li>
                            <li>
                                Wygrać w potyczce intelektualnej 
                            </li>
                            <li>
                                Odwołać się w rozmowe do swojej wiedzy rzemieślniczej.
                            </li>
                        </ul>
                    </details>
                    <ul>
                        <li>Historia</li>
                        <li>Przyroda</li>
                        <li>Religia</li>
                        <li>Śledztwo</li>
                        <li>Wiedza tajemna</li>
                    </ul>
                    <details>
                        <summary>Mądrość</summary>
                        
                        <ul>
                            <li>
                                Spostrzegawczość i wyczucie. Dostrzeganie mowy ciała i empatia.
                            </li>
                            <li>
                                Diagnozowanie choroby. Stabilizacja chorego.
                            </li>
                            <li>
                                Omijanie trudnego terenu albo znajdujesz ślady bandytów czy jakiegoś potwora.
                            </li>
                            <li>
                                Przewidywanie jaki wybór może okazać się lepszy 
                            </li>
                            <li>
                                Oceniasz czy np. leżące martwe ciało to nieumarły
                            </li>
                        </ul>
                        
                    </details>
                    <ul>
                        <li>Intuicja</li>
                        <li>Medycyna</li>
                        <li>Opieka nad zwierzętami</li>
                        <li>Percepcja</li>
                        <li>Sztuka przetrwania</li>
                    </ul>
                    <details>
                        <summary>
                            Charyzma
                        </summary>
                        
                            <ul>
                                <li>
                                    Skuteczność interakcji społecznych. Wpływowość lub wręcz przeciwnie, podporządkowywanie się innym.
                                </li>
                                <li>
                                    Skuteczność kłamstw albo umiejętność rozmów w specyficznej atmosferze.
                                </li>
                                <li>
                                    Zorientowanie się w głównych tematach rozmów w karczmie
                                </li>
                                <li>
                                    Znalezienie osoby, z którą warto porozmawiać o plotkach czy krążących informacjach w mieście. 
                                </li>
                            </ul>
                        
                    </details>
                    <ul>
                        <li>Perswazja</li>
                        <li>Oszustwo</li>
                        <li>Występy</li>
                        <li>Zastraszanie</li>
                    </ul>
                </div>
                <div className={rule4Class}>
                        Trzeba mieć się gdzie ukryć. W trakcie walki raczej postaci są skupione na celach i nie da się ukryć w jej trakcie.
                        Żeby się podkraść również muszą być spełnione minimalne warunki ukrycia się.
                        <br/>
                        Kiedy się ukrywasz i ktoś spodziewa się ciebie rozwiązuje się to testem spornym:
                        <br/>
                        Skradanie się vs Percepcja.
                        <br/>
                        Jeśli podkradający się nie jest spodziewanym gościem wystarczy, że on rzuci.
                        Wynik testu jest konfrontowany z pasywną percepcją osób do których się podkrada.
                    </div>
                <div className={rule5Class}>
                        <p>
                            Pułapka musi mieć określony stopień trudności wykrycia
                            oraz stopień trudności rozbrojenia. Często obie te rzeczy są podbnie trudne.
                            <br/>
                            Niektóre działania graczy mogę z zasady odkrywać pułapki i nie potrzeba wówczas kazać im rzuacć testu.
                            <br/>
                        </p>
                        Przykładowe pułapki:
                        <ul>
                            <li>
                                mechaniczne:
                                <ol>
                                    <li>
                                        <details>
                                            <summary>Prosty dół</summary>
                                            <p>
                                                Dzira w ziemi min 3m obrażenia zależne od głębkości.
                                                ST dostrzerzenia: 10
                                            </p>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Spadająca sieć</summary>
                                            <p>
                                                Pulapka wykorzystuje napiętą linke, ktora po szarpnieciu
                                                uwalnia sic zawieszona pod sufitem.
                                                Linka jest rozpieta 7,5 centymetra nad ziemia miedzy
                                                dwoma kolumnami albo drzewami. Sieć jest zakryta
                                                pajeczynami albo listowiem. ST dostrzezenia linki i sieci
                                                to 10. Udany test Zrecznosci o ST 15 z uzyciem narzedzi
                                                zlodziejskich unieszkodliwia pulapke. Postac bez narzedzi
                                                zlodziejskich moze posluzyé sie dowolnym ostrzem narze-
                                                dzia lub broni, ale wykonuje test z utrudnieniem. Nieudany
                                                test uruchamia pulapke.
                                                Wyzwolenie pulapki powoduje, ze sieé spada i pokrywa
                                                obszar kwadratu o boku 3 metrów. Stworzenia na tym
                                                obszarze zostaja uwiezione pod siecia i unieruchomione,
                                                musza takze wykonac rzut obronny na Site o ST 10.
                                                W przypadku niepowodzenia zostaja powalone. Stworzenie
                                                moze w ramach swojej akcji wykonac test Sily o SI 10.
                                                W przypadku sukcesu uwalnia siebie abo inna istote. Siec
                                                ma KP 10 i 20 PW. Jesli siec otrzyma 5 obrazer cietych, to
                                                jedna kwadratowa część o boku 1,5 metra zostaje zniszczona,
                                                a uwiezione pod nia stworzenia uwolnione.
                                            </p>
                                        </details>
                                        
                                    </li>
                                    <li>
                                        koszące ostrza
                                    </li>
                                    <li>
                                        spadająca sieć
                                    </li>
                                    <li>
                                        zatrute strzałki
                                    </li>
                                </ol>
                            </li>
                            <li>
                                megiczne:
                                <ol>
                                    <li>
                                        duszące pnącza
                                    </li>
                                </ol>
                            </li>
                        </ul>
                        <br/>
                        Tabele rzutu obronnego:
                        <table className="tg">
                            <thead>
                              <tr>
                                <th className="tg-0lax">Moc pułapki</th>
                                <th className="tg-0lax">ST rzutu obronnego</th>
                                <th className="tg-0lax">Premia do ataku</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="tg-0lax">Uciążliwa</td>
                                <td className="tg-0lax">10-11</td>
                                <td className="tg-0lax">+3 do +5</td>
                              </tr>
                              <tr>
                                <td className="tg-0lax">Niebezpieczna</td>
                                <td className="tg-0lax">12-15</td>
                                <td className="tg-0lax">+6 do +8</td>
                              </tr>
                              <tr>
                                <td className="tg-0lax">Zabójcza</td>
                                <td className="tg-0lax">16-20</td>
                                <td className="tg-0lax">+9 do +12</td>
                              </tr>
                            </tbody>
                        </table>

                        <br/>
                        Tabela obrażeń wg poziomu i dotkliwości:
                        <table className="tg">
                            <thead>
                              <tr>
                                <th className="tg-0lax">Poziom postaci</th>
                                <th className="tg-0lax">Uciążliwa</th>
                                <th className="tg-0lax">Niebezpieczna</th>
                                <th className="tg-0lax">Zabójcza</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="tg-0lax">1-4</td>
                                <td className="tg-0lax">1k10</td>
                                <td className="tg-0lax">2k10</td>
                                <td className="tg-0lax">4k10</td>
                              </tr>
                              <tr>
                                <td className="tg-0lax">5-10</td>
                                <td className="tg-0lax">2k10</td>
                                <td className="tg-0lax">4k10</td>
                                <td className="tg-0lax">10k10</td>
                              </tr>
                              <tr>
                                <td className="tg-0lax">11-16</td>
                                <td className="tg-0lax">4k10</td>
                                <td className="tg-0lax">10k10</td>
                                <td className="tg-0lax">18k10</td>
                              </tr>
                              <tr>
                                <td className="tg-0lax">17-20</td>
                                <td className="tg-0lax">10k10</td>
                                <td className="tg-0lax">18k10</td>
                                <td className="tg-0lax">24k10</td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                <div className={rule6Class}>
                    duża lub mniejsza istota trafiona siecią zostaje unieruchomiona.
                    Trafione stworzenie może wykorzystać akcją na wykonanie testu siły o ST 10
                    by uwolnić siebie lub inną istotę znajdującą się w jej strefie ataku.
                    Zadanie sieci 5pkt obrażeń ciętych (KP10) uwalnia stowrzenie bez robienia mu przywdy
                    kończącstan unieruchomienia i niszcząc sieć.
                    Można rzucić sieć tylko raz w ramach swojej akcji, akcji dodatkowej lub reakcji przeznaczonej na atak.
                </div>
                <div className={rule7Class}>
                    zaklęcie "Blinded" (Zaślepienie) jest stanem, w którym stworzenie jest pozbawione zdolności widzenia.<br/>
                    Osoba, stworzenie lub potwór, które jest oślepione, ma następujące cechy:<br/><br/>
                    <ul>
                        <li>
                            Automatycznie niezdolność do wykonywania rzutów ataku: Postać oślepiona ma dezorientację w walce i rzutów ataku przeciwko przeciwnikom wykonuje z ułomnością, co oznacza, że rzuty ataku mają wówczas wady (rzuca się dwiema kostkami i bierze mniejszą wartość). Również rzuty ataku przeciwko postaci oślepionej mają przewagę, co oznacza, że przeciwnik rzuca dwiema kostkami i bierze większą wartość.
                        </li>
                        <li>
                            Automatycznie niezdolność do korzystania ze zdolności związanych ze wzrokiem: Postać oślepiona nie może korzystać ze zdolności opartych na wzroku, takich jak czytanie, wykrywanie ukrytych przeciwników czy rozpoznawanie otoczenia.
                        </li>
                        <li>
                            Rzuty obronne z woli: W niektórych przypadkach postać oślepiona może mieć korzyści w obronie przed zaklęciami lub zdolnościami, które wymagają rzutu obronnego na Woli.
                        </li>
                    </ul>
                </div>
                <div className={rule8Class}>
                    Postać otrzymuje 1k6 obrażeń obuchowych od upadku za każde 3 metry (max 20k6). Ponadto bohater jest powalony.</div>
            </div>
            <div style={{margin: '.5em', display: 'grid', gridTemplateColumns: '50% 50%', gridTemplateRows: 'auto auto'}}>
                <div onClick={() => {changeRule('Kalkulator odległości'); set1Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Kalkulator odległości
                </div>
                <div onClick={() => {changeRule('Typy broni i zasięgi'); set2Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Typy broni i zasięgi
                </div>
                <div onClick={() => {changeRule('Testy Atrybutów'); set3Class('activeRuleContent')}}
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Testy Atrybutów
                </div>
                <div onClick={() => {changeRule('Ukrywanie się'); set4Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Ukrywanie się
                </div>
                <div onClick={() => {changeRule('Pułapki'); set5Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Pułapki
                </div>
                <div onClick={() => {changeRule('Upadek'); set6Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Upadek
                </div>
                <div onClick={() => {changeRule('Zaślepienie'); set7Class('activeRuleContent')}}
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Zaślepienie
                </div>
                <div onClick={() => {changeRule('Sieć'); set8Class('activeRuleContent')}} 
                    className='rules-grid-element' style={{backgroundColor: 'var(--gray-color)'}}>
                    Sieć
                </div>
            </div>
        </div>
    );
}

export default Rules;