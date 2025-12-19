'use client';

import { useState } from 'react';

export default function Simulator() {
  const [caMensuel, setCaMensuel] = useState<string>('');
  const [tauxCommission, setTauxCommission] = useState<string>('');
  const [fraisFixes, setFraisFixes] = useState<string>('');
  const [resultats, setResultats] = useState<{
    commissionsActuelles: number;
    economieMensuelle: number;
    economieAnnuelle: number;
  } | null>(null);

  const calculerEconomies = () => {
    const ca = parseFloat(caMensuel) || 0;
    const taux = parseFloat(tauxCommission) || 0;
    const fixes = parseFloat(fraisFixes) || 0;

    if (ca <= 0 || taux <= 0) {
      alert('Veuillez remplir au minimum le CA mensuel et le taux de commission.');
      return;
    }

    const commissionsActuelles = (ca * taux) / 100 + fixes;
    const hypotheseOptimisation = 0.25; // 25% d'économies
    const economieMensuelle = commissionsActuelles * hypotheseOptimisation;
    const economieAnnuelle = economieMensuelle * 12;

    setResultats({
      commissionsActuelles: Math.round(commissionsActuelles),
      economieMensuelle: Math.round(economieMensuelle),
      economieAnnuelle: Math.round(economieAnnuelle),
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('audit-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
          Simulateur d'économies
        </h2>
        <p className="text-base text-slate-600 font-light">
          Calculez rapidement vos économies potentielles
        </p>
      </div>

      <div className="bg-slate-50 p-12 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="ca-mensuel" className="block text-sm font-medium text-slate-700 mb-2">
                CA mensuel encaissé par carte (€)
              </label>
              <input
                type="number"
                id="ca-mensuel"
                value={caMensuel}
                onChange={(e) => setCaMensuel(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                placeholder="35000"
              />
            </div>

            <div>
              <label htmlFor="taux-commission" className="block text-sm font-medium text-slate-700 mb-2">
                Taux de commission moyen (%)
              </label>
              <input
                type="number"
                id="taux-commission"
                value={tauxCommission}
                onChange={(e) => setTauxCommission(e.target.value)}
                step="0.01"
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                placeholder="1.2"
              />
            </div>

            <div>
              <label htmlFor="frais-fixes" className="block text-sm font-medium text-slate-700 mb-2">
                Frais fixes mensuels (€) <span className="text-slate-400">(optionnel)</span>
              </label>
              <input
                type="number"
                id="frais-fixes"
                value={fraisFixes}
                onChange={(e) => setFraisFixes(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-slate-900 transition-colors"
                placeholder="50"
              />
            </div>
          </div>

        <button
          onClick={calculerEconomies}
          className="w-full md:w-auto px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
        >
          Calculer mes économies potentielles
        </button>

        {resultats && (
            <div className="mt-12 p-10 bg-white border border-slate-200">
              <p className="text-slate-600 mb-8 text-base font-light leading-relaxed">
                Vous payez environ <strong className="text-slate-900 font-normal">{resultats.commissionsActuelles.toLocaleString('fr-FR')} €</strong> / mois de commissions.
              </p>
              <p className="text-base text-slate-700 mb-8 font-light">
                Avec une optimisation réaliste de 25%, vous pourriez économiser environ :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="border border-slate-200 p-6">
                  <p className="text-xs text-slate-500 mb-3 font-light uppercase tracking-wide">Économies mensuelles</p>
                  <p className="text-2xl font-normal text-slate-900">
                    {resultats.economieMensuelle.toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div className="border border-slate-200 p-6">
                  <p className="text-xs text-slate-500 mb-3 font-light uppercase tracking-wide">Économies annuelles</p>
                  <p className="text-2xl font-normal text-slate-900">
                    {resultats.economieAnnuelle.toLocaleString('fr-FR')} €
                  </p>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full px-8 py-3 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-base"
              >
                Recevoir un audit détaillé de ma situation
              </button>
            </div>
        )}
      </div>
    </div>
  );
}

