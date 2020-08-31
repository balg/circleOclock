const colorSet = [
  { color: "#14D3F5" }, // fb-cyan
  { color: "#FC6B3A" }, // fb-orange
  { color: "#BD4EFC" }, // fb-purple
  { color: "#FFCC33" }, // fb-peach
  { color: "#5BE37D" }, // fb-mint
  { color: "#FFFFFF" }, // white
];

function mySettings(props) {
  return (
    <Page>
      <Section title="Color">
        <ColorSelect settingsKey="color" colors={colorSet} />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
