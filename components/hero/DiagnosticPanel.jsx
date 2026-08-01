import Card from "@component/ui/Card";
import Badge from "@component/ui/Badge";

import {
  Cpu,
  ShieldCheck,
  BatteryCharging,
  CheckCircle2,
} from "lucide-react";

const diagnostics =[
  {
    icon: Cpu,
    label: "Hardware Analysis",
    status: "Completed",
  },
  {
    icon: BatteryCharging,
    label: "Battery Health",
    status: "98%",
  },
  {
    icon: ShieldCheck,
    label: "Quality Verification",
    status: "passed",
  },
];

export default function DiagnosticPanel() {
    return (
        <Card
          glow
          className="w-full max-w-sm p-6 lg:p-7"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Badge>
                    Repair Lab
                </Badge>

                <span className="text-xs text-white/50">
                 LIVE
                </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Device Diagnostic
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                Every smartphone is inspected through a structured
                diagnostic workflow before repair begins.
              </p>
            </div>

            <div className="space-y-4">
              {diagnostics.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(20,241,217,.12)]">
                        <Icon
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>

                        <p className="text-xs text-[var(--text)]">
                          {item.status}
                        </p>
                      </div>
                    </div>

                    <CheckCircle2
                      size={18}
                      className="text-[var(--primary)]"
                    />
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[rgba(20,241,217,.18)] bg-[rgba(20,241,217,.06)] p-4">
              <span className="text-sm text-white">
                Overall Device Status 
              </span> 

              <span className="font-semibold text-[var(--primary)]">
                Excellent
              </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-[var(--primary)]" />
          </div>
      </div>
    </Card>
  );
}