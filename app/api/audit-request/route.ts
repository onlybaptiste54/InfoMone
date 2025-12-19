import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation basique
    if (!data.nom || !data.prenom || !data.email || !data.telephone || !data.entreprise || !data.rgpd) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Ici, vous pouvez intégrer avec n8n, un CRM, ou envoyer un email
    // Pour l'instant, on log les données (en production, utilisez un service externe)
    console.log('Nouvelle demande d\'audit:', {
      nom: data.nom,
      prenom: data.prenom,
      entreprise: data.entreprise,
      secteur: data.secteur,
      email: data.email,
      telephone: data.telephone,
      caMensuel: data.caMensuel,
      tauxCommission: data.tauxCommission,
      ville: data.ville,
      message: data.message,
      date: new Date().toISOString(),
    });

    // TODO: Intégrer avec votre système (n8n webhook, CRM, email service, etc.)
    // Exemple avec un webhook n8n:
    // await fetch('https://votre-webhook-n8n.com/audit-request', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    return NextResponse.json(
      { success: true, message: 'Demande reçue avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

