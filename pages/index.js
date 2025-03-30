import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = () => {
    if (username === "pctotal" && password === "power") {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phoneDigits = form.phoneDigits.value;
    const description = form.description.value;

    const response = await fetch("/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, phoneDigits, description }),
    });

    if (response.ok) {
      alert("Reporte enviado correctamente.");
      form.reset();
    } else {
      alert("Error al enviar el reporte.");
    }
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full min-h-screen font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#000000" },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="absolute inset-0 p-6 max-w-xl mx-auto z-10">
        <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Integrity Guest</h1>

        {!isLoggedIn ? (
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <Input
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>Entrar</Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList>
              <TabsTrigger value="report">Reportar Cliente</TabsTrigger>
              <TabsTrigger value="search">Buscar Clientes</TabsTrigger>
              <TabsTrigger value="about">Quiénes Somos</TabsTrigger>
              <TabsTrigger value="legal">Aviso Legal</TabsTrigger>
            </TabsList>

            <TabsContent value="report">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Reportar Cliente Conflictivo</h2>
                  <form onSubmit={handleSubmitReport} className="space-y-4">
                    <Input name="fullName" placeholder="Nombre y apellidos del cliente" required />
                    <Input name="email" placeholder="Email del cliente" required />
                    <Input name="phoneDigits" placeholder="Últimos 4 dígitos del teléfono" required />
                    <Textarea name="description" placeholder="Descripción y pruebas" required />
                    <Button type="submit">Enviar Reporte</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="search">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <p>🔍 Aquí irá el buscador de clientes conflictivos. (Próximamente)</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h2 className="font-semibold text-lg mb-2">¿Quiénes Somos?</h2>
                  <p>
                    Integrity Guest es una plataforma privada y ética desarrollada por PCTotal
                    Componentes y rep. SLU (CIF B86618410) para ayudar a hosteleros a compartir
                    información sobre clientes conflictivos de forma segura y legal.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal">
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h2 className="font-semibold text-lg mb-2">Aviso Legal</h2>
                  <p>
                    Todos los datos compartidos cumplen con la normativa vigente de protección
                    de datos (RGPD). La información publicada es responsabilidad del establecimiento
                    que la reporta, y está basada en pruebas verificables.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
