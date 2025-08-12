"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle, LogOut, Mail, FileText, Mic } from "lucide-react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Component() {
  const [openDropdowns, setOpenDropdowns] = useState({
    email: true, // Email aberto por padrão
    help: false,
    logout: false,
  });
  const [selectedApiOption, setSelectedApiOption] = useState("txt");

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleApiOptionChange = (option: string) => {
    setSelectedApiOption((prev) => (prev === option ? "" : option));
  };
  return (
    <div className="flex h-screen bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-white border-2 border-gray-300">
                <div className="w-8 h-8 border border-gray-400 rounded"></div>
              </AvatarFallback>
            </Avatar>
            <div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-transparent"
              >
                Não
              </Button>
            </div>
          </div>
          <Button variant="outline" className="w-full text-sm bg-transparent">
            Zapier
          </Button>
        </div>

        {/* Chats Section */}
        <div className="flex-1 p-4">
          <h3 className="font-semibold text-lg mb-4">Chats</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
              Java roadmap
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          {/* Email Dropdown */}
          <Collapsible
            open={openDropdowns.email}
            onOpenChange={() => toggleDropdown("email")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sabrinabr@gmail.com</span>
              </div>
              {openDropdowns.email ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-6 mt-1 space-y-1">
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                Perfil
              </div>
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                Configurações da conta
              </div>
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                Privacidade
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Help Dropdown */}
          <Collapsible
            open={openDropdowns.help}
            onOpenChange={() => toggleDropdown("help")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Suporte</span>
              </div>
              {openDropdowns.help ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-6 mt-1 space-y-1">
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                FAQ
              </div>
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                Entre em contato
              </div>
              <div className="text-xs text-gray-500 hover:bg-gray-100 p-2 rounded cursor-pointer">
                Documentação
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Log out - sem dropdown */}
          <div className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-medium">Novo chat</h2>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-gray-200 rounded-2xl px-4 py-3 max-w-xs">
                <p className="text-sm">faça um roadmap JAVA SpringBoot</p>
              </div>
            </div>

            {/* Assistant Response */}
            <div className="flex justify-start">
              <div className="max-w-2xl">
                <p className="text-sm text-gray-700">
                  Só um instante, estou buscando na base de dados.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 cursor-pointer ${
                  selectedApiOption === "pdf"
                    ? "bg-gray-400 hover:bg-gray-400"
                    : "bg-transparent"
                }`}
                onClick={() => handleApiOptionChange("pdf")}
              >
                <FileText className="w-4 h-4" />
                pdf
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 cursor-pointer ${
                  selectedApiOption === "txt"
                    ? "bg-gray-400 hover:bg-gray-400"
                    : "bg-transparent"
                }`}
                onClick={() => handleApiOptionChange("txt")}
              >
                <FileText className="w-4 h-4" />
                txt
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 cursor-pointer ${
                  selectedApiOption === "audio"
                    ? "bg-gray-400 hover:bg-gray-400"
                    : "bg-transparent"
                }`}
                onClick={() => handleApiOptionChange("audio")}
              >
                <Mic className="w-4 h-4" />
                audio
              </Button>
              <div className="flex-1">
                <Input
                  placeholder="Digite sua mensagem..."
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollbar */}
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-100 border-l border-gray-200">
          <div className="w-full h-20 bg-black mt-96"></div>
        </div>
      </div>
    </div>
  );
}
