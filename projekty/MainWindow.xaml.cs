using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp2
{
    /// <summary>
    /// Logika interakcji dla klasy MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public class Produkt
        {
            public string Nazwa { get; set; }
            public string Kategoria { get; set; }
            public string KodEAN { get; set; }
            public string Sektor { get; set; }
            public string Regal { get; set; }
            public string Polka { get; set; }
        } // klasa opisuje produkt
        List<Produkt> produkty = new List<Produkt>();
        //lista produktow

        public MainWindow()
        {
            InitializeComponent();

            //dodajemy produkty
            produkty.Add(new Produkt
            {
                Nazwa = "Kabel",
                Kategoria = "Elektryka",
                KodEAN = "123456789",
                Sektor = "A",
                Regal = "1",
                Polka = "2"
            });

            produkty.Add(new Produkt
            {
                Nazwa = "Mlotek",
                Kategoria = "Narzedzia",
                KodEAN = "987654321",
                Sektor = "B",
                Regal = "2",
                Polka = "3"
            });

            produkty.Add(new Produkt
            {
                Nazwa = "Zarowka",
                Kategoria = "Oswietlenie",
                KodEAN = "123451234",
                Sektor = "C",
                Regal = "4",
                Polka = "1"
            });
        }
        private void Wyszukaj_Click(object sender, RoutedEventArgs e)
        {
            string nazwa = Nazwa.Text;
            string kod = Kod.Text;
            string kategoria = Kategoria.Text;
            string sektor = Sektor.Text;
            string regal = Regal.Text;
            string polka = Polka.Text;

            Produkt znaleziony = produkty.FirstOrDefault(p =>
            (!string.IsNullOrEmpty(nazwa) && p.Nazwa.Equals(nazwa, StringComparison.OrdinalIgnoreCase))
            || (!string.IsNullOrEmpty(kategoria) &&
            p.Kategoria.Equals(kategoria, StringComparison.OrdinalIgnoreCase))
             || (!string.IsNullOrEmpty(kod) &&
            p.KodEAN == kod)||(!string.IsNullOrEmpty(sektor) && p.Sektor.Equals(sektor, StringComparison.OrdinalIgnoreCase))
            || (!string.IsNullOrEmpty(regal) &&
            p.Regal == regal) || (!string.IsNullOrEmpty(polka) &&
            p.Polka == polka)
    );//metoda uruchamiana po kliku,szuka pierwszy produkt ktory pasuje do podanych danych


            if (znaleziony == null)
            {
                Odpowiedz.Text = "Nie znaleziono produktu";
                return;
            }

            Odpowiedz.Text = "Nazwa: " + znaleziony.Nazwa + "\n" +
                "Kategoria: " + znaleziony.Kategoria + "\n" +
                 "Kod EAN: " + znaleziony.KodEAN + "\n" +
                 "Sektor: " + znaleziony.Sektor + "\n" +
                 "Regał: " + znaleziony.Regal + "\n" +
                 "Półka: " + znaleziony.Polka;
        }//wyswietla informacje 
    }
}