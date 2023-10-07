import Tabs from "@/app/components/Tabs";

const tabs = [
  {name: 'Account', id: 1, url: '/settings'},
  {name: 'Password', id: 2, url: '/settings/password'},
  {name: 'Webhook', id: 3, url: '/settings/webhook'},
  {name: 'Integrations', id: 4, url: '/settings/integrations'},
]

export default function SettingsLayout({
                                         children,
                                       }) {
  return (
    <>
      <Tabs tabs={tabs}/>
      <div className='shadow rounded-md sm:overflow-hidden bg-white py-6 px-4 space-y-6 sm:p-6'>
        {children}
      </div>
    </>
  );
}