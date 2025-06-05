import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 24, marginBottom: 10 },
  text: { fontSize: 14 },
});

const CurriculoPDF = ({ dados }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{dados.nome}</Text>
        <Text style={styles.text}>Email: {dados.email}</Text>
        <Text style={styles.text}>Telefone: {dados.telefone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Experiências</Text>
        {dados.experiencias.map((exp, index) => (
          <Text key={index} style={styles.text}>{exp}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default CurriculoPDF;
